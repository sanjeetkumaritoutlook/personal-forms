import { Component, OnInit ,ViewEncapsulation,EventEmitter} from '@angular/core';
 import * as data from '../../../../assets/wills-policy.json';
 // import * as data from '../../../../assets/advanced-form.json';
  import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-willspolicy',
  templateUrl: './willspolicy.component.html',
  styleUrls: ['./willspolicy.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class WillspolicyComponent implements OnInit {
  form: any = (data as any).default;
  rendered = false;
  constructor(private http: HttpClient) { }
  submission = {};
  refreshForm:any = new EventEmitter();
   serializedForm = JSON.stringify(this.form);
   Url="https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/make?format=json";
   totalAngularPackages;
ExpressUrl='http://localhost:5000/api/policy';
customInfo='';
  ngOnInit(): void {
  
    // debugger;
    // this.form.refreshForm = new EventEmitter();
    // this.form.submission = {};
    // this.form.components[0].label = 'Again Changed'; // here it is not changing but in this.form.components[0].label value is displaying as 'Again Changed', but not effecting in front end


    
     // Simple GET request with response type <any>
     this.http.get<any>('https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/make?format=json').subscribe(data => {
      this.totalAngularPackages = JSON.stringify(data.Results);
      // this.http.get<any>('https://examples.form.io/customer/submission').subscribe(data => {
      //this.totalAngularPackages = JSON.stringify(data);
     // console.log('totalAngularPackages'+this.totalAngularPackages);
  });
  
    this.http.get<any>(this.ExpressUrl).subscribe(data => {
      console.log('data'+JSON.stringify(data));
     this.customInfo=JSON.parse(JSON.stringify(data[1].text1));
	 
  });
  
this.showData();

  }
  
  showData() {
    this.form.components[0].html = this.customInfo; // here it is not changing but in this.form.components[0].label value is displaying as 'Again Changed', but not effecting in front end
    this.form.components[1].label = 'Calulated Value';
    // this.form.components[1].defaultValue = 'Calulated custom Value';
    this.form.components[2].data.url= this.Url;
    this.form.components[2].placeholder='tessss';
    
  this.refreshForm.emit({
   form: this.form
});
  }
  
  // onSubmit (submission: any) {
    onSubmit () {
    console.log('Form rendered!');
    console.log(data);
    console.log('submission'+this.form.submission);
    this.rendered = true;
   

  }

   setSubmission(submission: any, formId: string): void {
    if (submission.changed && submission.changed.component.key) {
     // this.submission.data[submission.changed.component.key] = submission.changed.value;
      // console.log(submission.changed.value);
      if (formId === 'form1') {
        // this.refreshForm.emit({
        //   submission: this.submission
        // });
      }
    
   
    }
  }

//   "options":{
// 		"hooks": {
// 		  "beforeSubmit": function(submission, callback) {
// 			console.log(submission);
// 			// Do something asynchronously.
// 			setTimeout(function() {
// 			  // Callback with a possibly manipulated submission.
// 			  callback({
// 				message: "Something bad happened.",
// 				component: null
// 			  }, null);
// 			}, 1000);
// 		}
// 	  }
// }
}
