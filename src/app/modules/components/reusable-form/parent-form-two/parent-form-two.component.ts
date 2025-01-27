import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SharedFormService } from 'src/app/shared/services/shared-form.service';

@Component({
  selector: 'app-parent-form-two',
  templateUrl: './parent-form-two.component.html',
  styleUrls: ['./parent-form-two.component.css']
})
export class ParentFormTwoComponent implements OnInit {
  form2: FormGroup = null;

  constructor( private fb: FormBuilder,
    private sharedFormService: SharedFormService) { }

  ngOnInit(): void {
    this.form2 = this.fb.group({
      header: this.sharedFormService.sharedForm(),
      spouse: [null]
    })
  }
  onSubmit2() {
    console.log('Form2 submitted to database!');
  }
}
