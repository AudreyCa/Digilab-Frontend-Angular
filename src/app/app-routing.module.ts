import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './components/register/register.component';
// import { UserGuard } from './guards/user.guard';
import { OverviewComponent } from './components/overview/overview.component';
import { TchatComponent } from './components/tchat/tchat.component';
import { DirectoryComponent } from './components/directory/directory.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { TchatRoomComponent } from './components/tchat-room/tchat-room.component';

const routes: Routes = [
 {path:'', component: LoginComponent},
// on en fait un vide pour la première page d'attérissage
 {path:'register', component: RegisterComponent},
 {path:'Login', component: LoginComponent},
 {path:'overview', component: OverviewComponent, 
    children: 
    [{path:'tchat', component: TchatComponent, children: 
      [{path:'userList', component: UserListComponent}, {path:'tchatRoom', component: TchatRoomComponent}]}, 
    {path: 'directory', component: DirectoryComponent}]}
//  {path:'overview', component: OverviewComponent, canActivate:[UserGuard], children: []}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
