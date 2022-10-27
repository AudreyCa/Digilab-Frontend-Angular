import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalHttpService } from './global-http.service';

@Injectable({
  providedIn: 'root'
})
export class BackendService extends GlobalHttpService {

  // backend = 'http://127.0.0.1:3000/api/users';
  backend = 'http://localhost:3000/api/users';
  

  // getBack () : Observable<any> {
  //   return this._http.get(this.backend)
  // }

  postBack (formUser: any) : Observable<any> {
    return this._http.post(this.backend + '/register', formUser)
  }

}
