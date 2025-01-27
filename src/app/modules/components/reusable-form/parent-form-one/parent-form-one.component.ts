import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SharedFormService } from 'src/app/shared/services/shared-form.service';

@Component({
  selector: 'app-parent-form-one',
  templateUrl: './parent-form-one.component.html',
  styleUrls: ['./parent-form-one.component.css']
})
export class ParentFormOneComponent implements OnInit {
  form1: FormGroup = null;
  constructor(private fb: FormBuilder,
    private sharedFormService: SharedFormService) { }

  ngOnInit(): void {
    this.form1 = this.fb.group({
      header: this.sharedFormService.sharedForm(),
      hobby: [null]
    });
  }
  onSubmit1(){
    console.log(' Form1 submitted to database!');
  }

}
