import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  
// import * as data from '../../../../assets/angular-form.json';
import { FormGroup, FormControl } from '@angular/forms';

import { AuthenticationService } from 'src/app/auth/authentication.service'  
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  theme:'lm';
  id: string;  
  

/*dashboard related*/


ind = 0;  // index val of selected drop down
val = 0;
cityVal=0;
// data: any = (data as any);
myGroup = new FormGroup({
 CountryName: new FormControl(),
 states: new FormControl(),
 Cities: new FormControl(),
});

contactMethods = [
 { id: 1, label: "Email" },
 { id: 2, label: "Phone" }
]
contact = {
firstName: "CFR",
comment: "No comment",
subscribe: true,
contactMethod: 2 // this id you'll send and get from backend
}
/*End*/

  constructor(private router: Router, private authService: AuthenticationService) { }  
  
  ngOnInit(): void {
    this.id = sessionStorage.getItem('token');  
    //console.log(this.id);  
  }
  logout() {  
    console.log('logout');  
    this.authService.logout();  
    this.router.navigate(['/login']);  
  }  

  data={  
    "Countries":[  
      { 
        "id":0,
        "CountryName":"Indonesia",
        "States":[  
            {  
               "id":0,
               "StateName":"Bali",
               "Cities":[
                    {
                        "id":0,
                        "CityName":"Denpasar",
                        "Municipalities":[
                            {"id":0,"MunName":"Mun1"},
                            {"id":1,"MunName":"Mun2"},
                            {"id":2,"MunName":"Mun3"}
                        ]
                    },
    
                    {
                        "id":1,
                        "CityName":"Kuta",
                        "Municipalities":[
                            {"id":0,"MunName":"Mun4"},
                            {"id":1,"MunName":"Mun5"},
                            {"id":2,"MunName":"Mun6"}
                        ]
                    },
    
                    {
                        "id":2,
                        "CityName":"Tuban",
                        "Municipalities":[
                            {"id":0,"MunName":"Mun7"},
                            {"id":1,"MunName":"Mun8"},
                            {"id":2,"MunName":"Mun9"}
                        ]
                    }
                ]
            }, 
            {  
               "id":1,
               "StateName":"Badgis",
               "Cities":[
                    {
                        "id":0,
                        "CityName":"Denpasar",
                        "Municipalities":[
                            {"id":0,"MunName":"Mun1"},
                            {"id":1,"MunName":"Mun2"},
                            {"id":2,"MunName":"Mun3"}
                        ]
                    },
    
                    {
                        "id":1,
                        "CityName":"Andarab",
                        "Municipalities":[
                            {"id":0,"MunName":"Mun4"},
                            {"id":1,"MunName":"Mun5"},
                            {"id":2,"MunName":"Mun6"}
                        ]
                    }
                ] 
            }
        ]
      },
      {
        "id":1,
        "CountryName":"India",
        "States":[  
            {  
               "id":0,
               "StateName":"Delhi",
               "Cities":[
                    {  
                        "id":0,
                        "CityName":"Sonipat",
                        "Municipalities":[
                            {"id":0,"MunName":"Mun1"},
                            {"id":1,"MunName":"Mun2"},
                            {"id":2,"MunName":"Mun3"}
                        ]
                    },
                    {
                        "id":1,
                        "CityName":"Rohtak",
                        "Municipalities":[
                            {"id":0,"MunName":"Mun4"},
                            {"id":1,"MunName":"Mun5"},
                            {"id":2,"MunName":"Mun6"}
                        ]
                    }
                ] 
            },
            {  
               "id":1,
               "StateName":"Karnataka",
               "Cities":[
                    {
                        "id":0,
                        "CityName":"Mangalore",
                        "Municipalities":[
                            {"id":0,"MunName":"Mun1"},
                            {"id":1,"MunName":"Mun2"},
                            {"id":2,"MunName":"Mun3"}
                        ]
                    },
                    {
                        "id":1,
                        "CityName":"Hubli",
                        "Municipalities":[
                            {"id":0,"MunName":"Mun4"},
                            {"id":1,"MunName":"Mun5"},
                            {"id":2,"MunName":"Mun6"}
                        ]
                    }
                ] 
            }
        ]
      }
    ]
    }
}
