import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { GlobalHttpService } from './global-http.service';

@Injectable({
  providedIn: 'root'
})

export class UserService extends GlobalHttpService {
  // Les deux attributs suivant sont lié à reqres.in. Juste pour simuler le tchat. POur l'exercice....
  userApi: string = 'https://reqres.in/api/users?page=2';
  dataUrl = "https://reqres.in/api/users";

  // observable qui permet de souscrire au backend :
  currentUser = new Subject<User>()
  dataUserSubject = new BehaviorSubject<any>({})


  /**Cette méthode nous permet de récuperer les données de l'API reqres.in
   * Cette partie n'est valable que pour simuler le tchat mais elle n'est plus valable au branchement de socket.io
   * @returns Observable
   */
  getUsers () : Observable<any> {
    return this._http.get(this.userApi)
  }

  /**Cette méthode nous permet d'envoyer les données 
   * de notre formulaire register à l'API reqres
   * @param  {any} formUser
   * @returns Observable
   */
  postData (formUser: any) : Observable<any> {
    return this._http.post(this.dataUrl,{data: formUser})
  }

  /**Cette méthode nous permet de nexter (de renvoyer) les valeurs de l'user selectionné
   * vers le tchat-top-bar
   * @param  {any} user
   */
  setUserCurrent (user: any): void {
    // envoyer ces info à travers l'observable
    this.currentUser.next(user)
  }

  /**Cette méthode nous permet de récupérer les donnée de 
   * l'utilisateur selectionné en observable
   * @returns Observable
   */
  getUserCurrent(): Observable<User> {
    return this.currentUser.asObservable()
    // cette méthode retourne l'attribut transformé en observable
  }

  /** Cette méthode nous permet de récupérer 
   * les données saisies dans le login
   * pour les envoyer vers la user-list, en haut
   */
   getProfil() {
    const newData = localStorage.getItem('user')
    if (newData) {
      const userObj = JSON.parse(newData)
      const nom = userObj.mail.split(/[.@]/)[0]
      const prenom = userObj.mail.split(/[.@]/)[1]
      const myObject = {nom: nom, prenom: prenom, avatar: userObj.avatar, mail: userObj.mail, city: userObj.city}
      this.dataUserSubject.next(myObject)
      return this.dataUserSubject.asObservable()
    } else {
      return of()
    }
  }

}
