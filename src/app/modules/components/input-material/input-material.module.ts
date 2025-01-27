import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from "@angular/forms"
import {MaterialModule} from 'src/app/modules/feature-material/feature-material.module';
//import { RowComponentComponent } from './row-component/row-component.component';



@NgModule({
 // declarations: [RowComponentComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class InputMaterialModule { }
