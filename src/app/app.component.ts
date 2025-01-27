import { Component,OnInit } from '@angular/core';
import  *  as  data  from  '../assets/form.json';
// import  *  as  data  from  './form.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'personal-forms';
  ngOnInit(){
    console.log(data);

  }
}
