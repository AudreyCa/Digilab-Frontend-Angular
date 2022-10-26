import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { GlobalHttpService } from './global-http.service';

@Injectable({
  providedIn: 'root'
})

export class UserService extends GlobalHttpService{
  userApi: string = 'https://reqres.in/api/users?page=2';
  dataUrl = "https://reqres.in/api/users";
  // observable qui permet de souscrire.
  currentUser = new Subject<any>()
  dataUserSubject = new BehaviorSubject<any>({})

  getUsers () : Observable<any> {
    return this._http.get(this.userApi)
  }

  postData (formUser: any) : Observable<any> {
    return this._http.post(this.dataUrl,{data: formUser})
  }

  // l'utilisateur selectionné. Pour l'afficher dans le tchat-room, top bar
  setUserCurrent (user: any) {
    // envoyer ces info à travers l'observable
    this.currentUser.next(user)
  }

  getUserCurrent(): Observable<any> {
  
    return this.currentUser.asObservable()
    // cette méthode permet de transformer l'attribut en observable
  }

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
