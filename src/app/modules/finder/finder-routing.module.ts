import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinderComponent } from 'src/app/components/finder/finder.component';

const routes: Routes = [{path: '', component: FinderComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinderRoutingModule { }
