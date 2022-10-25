import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalHttpService } from './global-http.service';

@Injectable({
  providedIn: 'root'
})
export class DataService extends GlobalHttpService {
  /** Cette méhode permet de récupérer le pays pour les afficher dans la liste de pays sur le component register 
   * @returns Observable de type any qui est le lien de l'API
   */
  getCountries(): Observable<any> {
    return this._http.get('https://restcountries.com/v3.1/all')
  }

  /**Cette méthode permet de récupérer des jokes d'une API pour simuler une conversation dans le tchat
   * @returns Observable de type any correspondant au lien de l'API
   */
  getJokes(): Observable<any> {
    return this._http.get('https://official-joke-api.appspot.com/random_ten')
  }

}
