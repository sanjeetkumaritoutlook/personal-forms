import { Component, OnInit } from '@angular/core';
import LMButtonComponent from '../../../common/Button';
import { Formio } from 'angular-formio';
 Formio.use(LMButtonComponent);
@Component({
  selector: 'app-formio-button',
  templateUrl: './formio-button.component.html',
  styleUrls: ['./formio-button.component.css']
})
export class FormioButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
