import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { GlobalHttpService } from './global-http.service';

@Injectable({
  providedIn: 'root'
})

export class UserService extends GlobalHttpService{
  userApi: string = 'https://reqres.in/api/users?page=2';
  dataUrl = "https://reqres.in/api/users";
  // observable qui permet de souscrire :
  currentUser = new Subject<any>()
  dataUserSubject = new BehaviorSubject<any>({})

  /**Cette méthode nous permet de récuperer les données de l'API
   * @returns Observable
   */
  getUsers () : Observable<any> {
    return this._http.get(this.userApi)
  }

  /**Cette méthode nous permet d'envoyer les données 
   * de notre formulaire register à l'API
   * @param  {any} formUser
   * @returns Observable
   */
  postData (formUser: any) : Observable<any> {
    return this._http.post(this.dataUrl,{data: formUser})
  }

  /**Cette méthode nous permet de nexter (de renvotyer) les valeurs de l'user selectionné
   * vers le tchat-top-bar
   * @param  {any} user
   */
  setUserCurrent (user: any) {
    // envoyer ces info à travers l'observable
    this.currentUser.next(user)
  }

  /**Cette méthode nous permet de récupérer les donnée de 
   * l'utilisateur selectionné en observable
   * @returns Observable
   */
  getUserCurrent(): Observable<any> {
    return this.currentUser.asObservable()
    // cette méthode retourne l'attribut transformé en observable
  }

  /** Cette méthode nous permet de récupérer 
   * les données saisies dans le login (de l'Api)
   * pour les envoyer vers la user-list, en haut
   */
   getProfil() {
    const newData = localStorage.getItem('user')
    if (newData) {
      const userObj = JSON.parse(newData)
      const nom = userObj.mail.split(/[.@]/)[0]
      const prenom = userObj.mail.split(/[.@]/)[1]
      const myObject = {nom: nom, prenom: prenom, avatar: userObj.avatar, mail: userObj.mail}
      this.dataUserSubject.next(myObject)
      return this.dataUserSubject.asObservable()
    } else {
      return of()
    }
  }

}
