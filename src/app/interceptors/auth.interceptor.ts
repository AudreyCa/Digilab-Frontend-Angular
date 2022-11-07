import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { BackendService } from '../services/backend.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  backendUrl = `${environment.API_URL}`;

  constructor(private _backend: BackendService,
    private _snackBar: MatSnackBar) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('request auth interceptor', request.url)
    const token = this._backend.getToken();
    // Pour éviter les conflits avec les API :
    // Si la requete inclus notre adresse backend..
    // la requete est immuable donc on la clone et on y met le token
    if (request.url.includes(this.backendUrl)) {
      const dolly = request.clone({
        headers : request.headers.set('Authorization', `Bearer ${token}`)})
        // Handle permet de faire la passerelle pour la requete.
        return next.handle(dolly).pipe(
          // ! Si il y a une erreur : 
          catchError((error: HttpErrorResponse)=>{
            let message = ''
            //  On réagit en fonction du statut émis par le serveur ou le client
            switch (error.status) {
              case 400:
                message = "Bad request";
                break;
              case 401:
                message = "Unauthorized";
                break;
            } 
          // et on affiche dans une snackbar le message d'erreur
          this._snackBar.open(message, 'ok', {verticalPosition:'top'})
          return next.handle(dolly)
        }))
    }
    return next.handle(request);
  }
}
