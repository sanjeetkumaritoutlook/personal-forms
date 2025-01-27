import { Component, OnInit } from '@angular/core';
import LMSelectComponent from '../../../common/CustomSelect';
import { Formio } from 'angular-formio';
 Formio.use(LMSelectComponent);
 import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formio-select',
  templateUrl: './formio-select.component.html',
  styleUrls: ['./formio-select.component.css']
})
export class FormioSelectComponent implements OnInit {
  totalAngularPackages;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

     // Simple GET request with response type <any>
     this.http.get<any>('https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/make?format=json').subscribe(data => {
      this.totalAngularPackages = JSON.stringify(data);
      // this.http.get<any>('https://examples.form.io/customer/submission').subscribe(data => {
      //this.totalAngularPackages = JSON.stringify(data);
      console.log('totalAngularPackages'+this.totalAngularPackages);
  })

  }

}
