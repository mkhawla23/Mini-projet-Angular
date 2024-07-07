import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListReservationComponent} from "./ListReservation/list.component";

const routes: Routes = [{ path: '', component: ListReservationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationsRoutingModule { }
