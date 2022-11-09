import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { Component, NgModule } from '@angular/core';
import { RegisterComponent } from './components/register/register.component';
// import { UserGuard } from './guards/user.guard';
import { OverviewComponent } from './components/overview/overview.component';
import { TchatComponent } from './components/tchat/tchat.component';
import { DirectoryComponent } from './components/directory/directory.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { TchatRoomComponent } from './components/tchat-room/tchat-room.component';
import { TchatTopBarComponent } from './components/tchat-top-bar/tchat-top-bar.component';
import { FinderComponent } from './components/finder/finder.component';
import { AuthGuard } from './guards/auth.guard';
import { UserLlistResolver } from './resolvers/user-llist.resolver';

const routes: Routes = [
  // on en fait un vide pour la première page d'attérissage
  // !Attention, les path sont toujours en lowercase
//  {path:'', component: LoginComponent},
//  POur le module : on enlève 'component: LoginComponent' pour le placer dans login-routing module,
// puis on met le loadChildren avec l'import comme ci dessus. Le m dans le then est toujours comme ca
 {path:'login', loadChildren:() => import('./modules/login/login.module').then(m => m.LoginModule)},
 {path:'register', loadChildren:() => import('./modules/register/register.module').then(m => m.RegisterModule)},
 {path: 'finder', loadChildren:() => import('./modules/finder/finder.module').then(m => m.FinderModule), canActivate:[AuthGuard]},
 {path: 'tchat-room', component: TchatRoomComponent, canActivate:[AuthGuard]},
 {path:'overview', component: OverviewComponent, canActivate:[AuthGuard],
    children: 
    [{path: 'directory', component: DirectoryComponent, canActivate:[AuthGuard]},
    {path: 'finder', component: FinderComponent, canActivate:[AuthGuard]},
     {path:'tchat', component: TchatComponent, canActivate:[AuthGuard],
        children: 
        [{path:'userList', component: UserListComponent, canActivate:[AuthGuard], resolve:{userListRes: UserLlistResolver}}, 
         {path:'tchatRoom', component: TchatRoomComponent, canActivate:[AuthGuard],
            children:
            [{path:'tchatTopBar', component: TchatTopBarComponent, canActivate:[AuthGuard]}]}
            ]}
    ]}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
