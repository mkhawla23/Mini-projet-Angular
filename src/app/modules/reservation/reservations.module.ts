import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationsRoutingModule } from './reservations-routing.module';
import {ListReservationComponent} from './ListReservation/list.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ListReservationComponent
  ],
  imports: [
    CommonModule,
    ReservationsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ReservationsModule { }
