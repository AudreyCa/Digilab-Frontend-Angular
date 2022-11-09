import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AgePipe } from './pipes/age.pipe';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DirectoryComponent } from './components/directory/directory.component';
import { DirectoryModalComponent } from './modals/directory-modal/directory-modal.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgModule } from '@angular/core';
import { TchatComponent } from './components/tchat/tchat.component';
import { UserComponent } from './components/user/user.component';
import { UserModalComponent } from './modals/user-modal/user-modal.component';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherModalComponent } from './modals/weather-modal/weather-modal.component';
import { OverviewComponent } from './components/overview/overview.component';
import { SideBarLeftComponent } from './components/side-bar-left/side-bar-left.component';
import { SideBarRightComponent } from './components/side-bar-right/side-bar-right.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { TchatRoomComponent } from './components/tchat-room/tchat-room.component';
import { TchatTopBarComponent } from './components/tchat-top-bar/tchat-top-bar.component';
import { UserListModalComponent } from './modals/user-list-modal/user-list-modal.component';
import { MatChipsModule } from '@angular/material/chips';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FinderModalComponent } from './modals/finder-modal/finder-modal.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';
import { AddFriendModalComponent } from './modals/add-friend-modal/add-friend-modal.component';
import { RemoveFriendModalComponent } from './modals/remove-friend-modal/remove-friend-modal.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { SharedModule } from './modules/shared/shared.module';
const config: SocketIoConfig = { url: `${environment.API_URL}`, options: {} };


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AgePipe,
    UserModalComponent,
    DirectoryComponent,
    TchatComponent,
    WeatherComponent,
    DirectoryModalComponent,
    WeatherModalComponent,
    OverviewComponent,
    SideBarLeftComponent,
    NavBarComponent,
    SideBarRightComponent,
    UserListComponent,
    TchatRoomComponent,
    TchatTopBarComponent,
    UserListModalComponent,
    FinderModalComponent,
    AddFriendModalComponent,
    RemoveFriendModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatListModule,
    MatGridListModule,
    FormsModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatSnackBarModule,
    SocketIoModule,
    SocketIoModule.forRoot(config),
    MatSlideToggleModule,
    MatBadgeModule,
    SharedModule
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
