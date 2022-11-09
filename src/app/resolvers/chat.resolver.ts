import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { TchatService } from '../services/tchat.service';

@Injectable({
  providedIn: 'root'
})
// User => type de données qui sera récupéré
export class ChatResolver implements Resolve<User> {

  constructor(private _chatService: TchatService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    // on retourne les données récupérées (ici on utilise un service qui retourne une observable)
    return this._chatService.getFriend();
  }
}
