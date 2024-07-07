import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './components/loader/loader.component';
import { DataTablesModule } from "angular-datatables";
import { NgSelectModule } from '@ng-select/ng-select';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

const modules = [
  ReactiveFormsModule,
  FormsModule,
  DataTablesModule,
  NgSelectModule,
  SweetAlert2Module
];


@NgModule({
  declarations: [
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    ...modules
  ],
  exports: [...modules,LoaderComponent]
})
export class SharedAppModule { }
