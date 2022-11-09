import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';
import { TchatService } from '../services/tchat.service';

@Injectable({
  providedIn: 'root'
})
// User[] => type de données qui sera récupéré
export class UserLlistResolver implements Resolve<User[]> {

  constructor(private _tchatServ: TchatService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> {
    // on retourne les données récupérées (ici on utilise un service qui retourne une observable)
    return this._tchatServ.getFriend()
  }
}
