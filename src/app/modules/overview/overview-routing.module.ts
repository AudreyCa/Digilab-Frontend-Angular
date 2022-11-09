import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectoryComponent } from 'src/app/components/directory/directory.component';
import { FinderComponent } from 'src/app/components/finder/finder.component';
import { OverviewComponent } from 'src/app/components/overview/overview.component';
import { TchatRoomComponent } from 'src/app/components/tchat-room/tchat-room.component';
import { TchatTopBarComponent } from 'src/app/components/tchat-top-bar/tchat-top-bar.component';
import { TchatComponent } from 'src/app/components/tchat/tchat.component';
import { UserListComponent } from 'src/app/components/user-list/user-list.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { WeatherModalComponent } from 'src/app/modals/weather-modal/weather-modal.component';
import { UserLlistResolver } from 'src/app/resolvers/user-llist.resolver';

const routes: Routes = [{path:'', component: OverviewComponent,
    children: 
    [{path: 'directory', component: DirectoryComponent, canActivate:[AuthGuard]},
    {path: 'finder', component: FinderComponent, canActivate:[AuthGuard]},
    {path: 'weather', component: WeatherModalComponent, canActivate:[AuthGuard]},
     {path:'tchat', component: TchatComponent, canActivate:[AuthGuard],
        children: 
        [{path:'userList', component: UserListComponent, canActivate:[AuthGuard], 
        resolve:{userListRes: UserLlistResolver}}, 
         {path:'tchatRoom', component: TchatRoomComponent, canActivate:[AuthGuard],
            children:
            [{path:'tchatTopBar', component: TchatTopBarComponent, canActivate:[AuthGuard]}]}
            ]}
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverviewRoutingModule { }
