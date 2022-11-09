import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from 'src/app/components/overview/overview.component';
import { SharedModule } from '../shared/shared.module';
import { DirectoryComponent } from 'src/app/components/directory/directory.component';
import { TchatComponent } from 'src/app/components/tchat/tchat.component';
import { WeatherComponent } from 'src/app/components/weather/weather.component';
import { FinderComponent } from 'src/app/components/finder/finder.component';
import { UserListComponent } from 'src/app/components/user-list/user-list.component';
import { TchatRoomComponent } from 'src/app/components/tchat-room/tchat-room.component';
import { TchatTopBarComponent } from 'src/app/components/tchat-top-bar/tchat-top-bar.component';
import { SideBarLeftComponent } from 'src/app/components/side-bar-left/side-bar-left.component';
import { SideBarRightComponent } from 'src/app/components/side-bar-right/side-bar-right.component';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    OverviewComponent,
    DirectoryComponent,
    TchatComponent,
    WeatherComponent,
    UserListComponent,
    TchatRoomComponent,
    TchatTopBarComponent,
    SideBarLeftComponent,
    SideBarRightComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    OverviewRoutingModule,
    SharedModule
  ],
  exports: [
    CommonModule,
    OverviewRoutingModule,
    SharedModule
  ]
})
export class OverviewModule { }
