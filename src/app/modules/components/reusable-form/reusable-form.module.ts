import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentFormOneComponent } from './parent-form-one/parent-form-one.component';
import { ParentFormTwoComponent } from './parent-form-two/parent-form-two.component';
import { SharedFormComponent } from './shared-form/shared-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MaterialModule} from 'src/app/modules/feature-material/feature-material.module';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [ParentFormOneComponent, ParentFormTwoComponent, SharedFormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,MatFormFieldModule, ReactiveFormsModule
  ]
})
export class ReusableFormModule { }
