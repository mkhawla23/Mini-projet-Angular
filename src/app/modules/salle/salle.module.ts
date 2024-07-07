import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './salle-routing.module';
import { SalleComponent } from './List/salle.component';
import { SharedAppModule } from 'src/app/core/shared/shared.module';
import { UserFormComponent } from './salle-form/salle-form.component';


@NgModule({
  declarations: [
    SalleComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedAppModule
  ]
})
export class SalleModule { }
