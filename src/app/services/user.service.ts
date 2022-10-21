import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  userApi: string = 'https://reqres.in/api/users?page=2';
  dataUrl = "https://reqres.in/api/users";
  // observable qui permet de souscrire.
  currentUser = new Subject<any>()

  constructor(private httpClient: HttpClient) { }

  getUsers () : Observable<any> {
    return this.httpClient.get(this.userApi)
  }

  postData (formUser: any) : Observable<any> {
    return this.httpClient.post(this.dataUrl,{data: formUser})
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
