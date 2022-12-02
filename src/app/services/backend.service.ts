import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { GlobalHttpService } from './global-http.service';

@Injectable({
  providedIn: 'root'
})
export class BackendService extends GlobalHttpService {

  // Attention, on precise le chemin (/register, /login, etc...) en fonction de ce que l'on fait et seulement dans les méthode pour preciser
  // backend = 'http://localhost:3000/api/users';
  private _apiUrl = `${environment.API_URL}api/users`;


  register(registerValues:User):Observable<any>{
    return this._http.post(`${this._apiUrl}/register`, registerValues, {observe: 'response'});
  }

  login(loginValues:any):Observable<any>{
    return this._http.post(`${this._apiUrl}/login`, loginValues, {observe: 'response'});
  }

  getProfileAPI():Observable<any>{
    return this._http.get(`${this._apiUrl}/profile`,{observe: 'response'})
  }

  getUsersList():Observable<any>{
    return this._http.get(`${this._apiUrl}/list`, {observe: 'response'})
  }

  /**Cette méthode nous permet d'envoyer nos infos rentrées dans le register
   * vers le backend
   * @param  {any} formUser
   * @returns Observable
   */
  postBack (formUser: any) : Observable<any> {
    return this._http.post(this._apiUrl +"/register", formUser)
  }

  /**Cette méthode permet de récupérer le token via register
  */
  getToken() {
    return localStorage.getItem('token')
    //     const newToken = JSON.parse(<string>localStorage.getItem('token'))
    // return newToken.token
  }

  
  /** Cette méthode nous permet d'envoyer les données 
   * du form login au backend 
   * @param  {any} formLogin
   * @returns Observable
   */
  postLogin (formLogin:any): Observable<any> {
    return this._http.post(this._apiUrl +"/login", formLogin)
  }

  /**Cette méthode nous permet de mettre le token (récup au dessus) dans le headers.
   * On fait appel à HttpHeaders
   * @returns Observable
   */
  getProfil(): Observable<any> {
    console.log(this.getToken())
    let headerToken = new HttpHeaders().append('Authorization', `Bearer ${this.getToken()}`)
    return this._http.get(this._apiUrl +"/profile", {headers: headerToken})
  }

}