import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { GlobalHttpService } from './global-http.service';
import { map } from 'rxjs';
import { ResponseApiUser } from '../models/response-api-user';

@Injectable({
  providedIn: 'root'
})

export class UserService extends GlobalHttpService{
  userApi: string = 'https://reqres.in/api/users?page=2';
  dataUrl = "https://reqres.in/api/users";
  // observable qui permet de souscrire.
  currentUser = new Subject<any>()
  // responses!:any[];

  getUsers () : Observable<any> {
    return this._http.get(this.userApi)
    // .pipe(
    //   map(
    //     (response: ResponseApiUser) =>
    //     repsonse.data
    //       ))
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

}
