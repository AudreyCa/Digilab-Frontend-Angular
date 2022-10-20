import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { UserComponent } from './components/user/user.component';
import { UserGuard } from './guards/user.guard';

const routes: Routes = [
 {path:'user', component: UserComponent, canActivate:[UserGuard], children: []},
//  {path:'profil', component: ProfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
