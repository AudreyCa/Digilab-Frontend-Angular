import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class TchatService {
  
  messageSendToDisplay = new Subject();
  messageReceivedToDisplay = new Subject();
  usersOnLine = new Subject();
  
  constructor(private _http: HttpClient,
    private _socket: Socket,
    private _backend: BackendService) { }

  /** Etape 1 : On initie la conversation avec socket.io
   * avec .emit dans le salon login (cf. doc)
   * @param  {string} message
   */
  initConversation(message: string) {
    this._socket.emit("login", {token: this._backend.getToken()});
  } 

  /** Etape 2 : 
   * Cette méthode permet d'envoyer un message, de transferer l'objet que je vais
   * emit dans le salon "send friend message".
   * friendName contient le message
   * se référer à la doc du backend pour savoir quoi mettre dans les params
   * @param  {any} user
   * @param  {string} message
   */
  sendMessage(user: any, message: string) {
    this._socket.emit("send friend message", {friendName: user.username, content: message});
  }

  /** méthode pour nexter les données/messages que j'envoie
   * @param  {any} myMessage
   * @returns void
   */
  setMyMessage(myMessage: any): void {
    this.messageSendToDisplay.next(myMessage)
  }

  /** Etape 3 :
   * Méthode qui affiche les messages (data) que j'envoie
   * via le salon "friend message sent"
   * via .on car toujours en écoute
   */
  getMyMessage() {
    this._socket.on("friend message sent", (data:any)=> {
      console.log(data)
      this.setMyMessage(data)
    })
  }

  /** méthode qui affiche le message que j'envoie
   * ".on" (ecoute tout le temps)
   * @returns Observable
   */
  getMessageToSend(): Observable<any> {
    return this.messageSendToDisplay.asObservable()
  }

  /** méthode pour nexter les données/messages recus de l'interlocuteur
   * @param  {any[]} messageFriend
   * @returns void
   */
  setMsgSent (messageFriend: any): void {
    this.messageReceivedToDisplay.next(messageFriend)
  }

  /** méthode qui écoute tout le temps .on
   * Attention, ne retourne rien (void),
   * donc pour les utiliser, les passer via la méthode set...
   */
  getMsgSent() {
    this._socket.on ('friend message', (message: any)=> {
      console.log('message recu ', message)
      this.setMsgSent(message)
    })
  }

    /** méthode qui affiche le message recu de l'interlocuteur
   * ".on" (ecoute tout le temps)
   * @returns Observable
   */
  getMessageToReceived(): Observable<any> {
    return this.messageReceivedToDisplay.asObservable()
  }

    /** Méthode qui retourne TOUS les messages recu et envoyé
    * @returns Observable
    */
  getFriendMessages(username: any):Observable<any>{
    return this._http.get(`${environment.API_URL}api/messages/friendmessages/${username}`)
  }

  /** Cette méthode nous permet d'afficher la liste des amis issus du backend
   * @returns Observable
   */
  getFriend(): Observable<any> {
    return this._http.get(`${environment.API_URL}api/users/friends`)
  }

  /** Cette méthode nous permet d'ajouter des amis (backend)
   * ("username" vient de la doc et est de type string)
   * @param  {any} user
   */
  addFriend(user: any): Observable<any> {
    //  En premier param le salon/canal
    // En deuxième : un object contenant le friend grâce à username qui appartient à user et qu'on nommera friendName (doc)
    return this._http.post(`${environment.API_URL}api/users/addfriend`, {friendName: user.username})
  }

  /** Méthode qui permet de supprimer de la liste d'amis mais garde en utilisateurs du tchat
   * @param  {any} user
   * @returns Observable
   */
  removeFriend(user:any): Observable<any> {
    return this._http.post(`${environment.API_URL}api/users/removefriend`, {friendName: user.username})
  }

  /** méthode qui écoute tout le temps la liste des utilsateurs en ligne
   * et on la next
   */
  friendsOnLine() {
    this._socket.on ('users list', (users: any)=> {
      console.log('liste des utilsateurs connectés ', users)
      this.usersOnLine.next(users)
    })
  }

  /** méthode qui permet d'afficher si les users sont en ligne
   * ".on" (ecoute tout le temps)
   * @returns Observable
   */
  getFriendsOnline(): Observable<any> {
    return this.usersOnLine.asObservable()
  }



}
