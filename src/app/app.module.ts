// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AgePipe } from './pipes/age.pipe';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
// import { DirectoryModalComponent } from './modals/directory-modal/directory-modal.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { UserComponent } from './components/user/user.component';
// import { UserModalComponent } from './modals/user-modal/user-modal.component';
// import { WeatherModalComponent } from './modals/weather-modal/weather-modal.component';
// import { UserListModalComponent } from './modals/user-list-modal/user-list-modal.component';
// import { FinderModalComponent } from './modals/finder-modal/finder-modal.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import {  SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';
import { SharedModule } from './modules/shared/shared.module';
const config: SocketIoConfig = { url: `${environment.API_URL}`, options: {} };


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AgePipe,
    // UserModalComponent,
    // DirectoryModalComponent,
    // WeatherModalComponent,
    // UserListModalComponent,
    // FinderModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    SocketIoModule,
    SocketIoModule.forRoot(config)
  ],
  exports: [
    SharedModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
