import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AgePipe } from './pipes/age.pipe';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DirectoryComponent } from './components/directory/directory.component';
import { DirectoryModalComponent } from './modals/directory-modal/directory-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './components/register/register.component';
import { TchatComponent } from './components/tchat/tchat.component';
import { UserComponent } from './components/user/user.component';
import { UserModalComponent } from './modals/user-modal/user-modal.component';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherModalComponent } from './modals/weather-modal/weather-modal.component';
import { OverviewComponent } from './components/overview/overview.component';
import { SideBarLeftComponent } from './components/side-bar-left/side-bar-left.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SideBarRightComponent } from './components/side-bar-right/side-bar-right.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { TchatRoomComponent } from './components/tchat-room/tchat-room.component';
import { TchatTopBarComponent } from './components/tchat-top-bar/tchat-top-bar.component';
import { UserListModalComponent } from './modals/user-list-modal/user-list-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
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
    UserListModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatListModule,
    MatAutocompleteModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
