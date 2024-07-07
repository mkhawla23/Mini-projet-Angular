import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalleComponent } from './List/salle.component';

const routes: Routes = [{ path: '', component: SalleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
