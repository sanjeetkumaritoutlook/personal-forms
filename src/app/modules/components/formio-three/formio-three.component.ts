import { Component, OnInit } from '@angular/core';
import * as data from '../../../../assets/form.json';
@Component({
  selector: 'app-formio-three',
  templateUrl: './formio-three.component.html',
  styleUrls: ['./formio-three.component.css']
})
export class FormioThreeComponent implements OnInit {
  form: any = (data as any).default;
  rendered = false;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit () {
    console.log('Form rendered!');
    console.log(data);
    this.rendered = true;
  }
}
