import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  // on en fait un vide pour la première page d'attérissage
  // !Attention, les path sont toujours en lowercase
//  {path:'', component: LoginComponent},
//  Pour le module : on enlève 'component: LoginComponent' pour le placer dans login-routing module,
// puis on met le loadChildren avec l'import comme ci dessus. Le m dans le then est toujours comme ca
// le loadChildren et le children ne peuvent pas cohabiter.
 {path:'login', loadChildren:() => import('./modules/login/login.module').then(m => m.LoginModule)},
 {path:'register', loadChildren:() => import('./modules/register/register.module').then(m => m.RegisterModule)},
 {path: 'finder', loadChildren:() => import('./modules/finder/finder.module').then(m => m.FinderModule), canActivate:[AuthGuard]},
 {path:'overview', loadChildren:() => import('./modules/overview/overview.module').then(m => m.OverviewModule), canActivate:[AuthGuard]},
//  pour la page des erreurs 404 :
 {path:'**', component: NotFoundComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
