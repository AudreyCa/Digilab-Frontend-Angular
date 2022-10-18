import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  urlWeatherApi = "https://api.open-meteo.com/v1/forecast?latitude=46.19&longitude=6.24&hourly=temperature_2m";
  // urlWeatherPost = "";

  constructor(private _http: HttpClient) { }

  getDataWeather () : Observable<any> {
    return this._http.get(this.urlWeatherApi)
  }

  // postDataWeather (formWeather: any) : Observable<any> {
  //   return this._http.post(this.urlWeatherPost,{data: formWeather})
  // }
}
