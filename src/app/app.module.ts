import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA,Injector  } from '@angular/core';

//import {MaterialModule} from './modules/feature-material/feature-material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/components/login/login.component';
import { DashboardComponent } from './modules/components/dashboard/dashboard.component';
//import { InputMaterialModule } from './modules/components/input-material/input-material.module';
//import { MatFormioModule } from '@formio/angular-material';
//import { FlexLayoutModule } from '@angular/flex-layout';

import { AuthGuard } from './authentication.guard';    
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormioModule,Formio } from 'angular-formio';

import { createCustomElement} from '@angular/elements';
import { HttpClientModule } from '@angular/common/http';

//import { ReusableSampleComponent } from './modules/components/reusable-sample/reusable-sample.component'; 
import {ReusableFormModule} from './modules/components/reusable-form/reusable-form.module';
import { FormioComponent } from './modules/components/formio/formio.component';
import { FormioTwoComponent } from './modules/components/formio-two/formio-two.component';
 import { FormioThreeComponent } from './modules/components/formio-three/formio-three.component';
 import {  SchemaFormModule,  WidgetRegistry,  DefaultWidgetRegistry} from "ngx-schema-form";
import { MinimalformComponent } from './modules/components/minimalform/minimalform.component';
import { FormioCustomComponent } from './modules/components/formio-custom/formio-custom.component';
// import { appYesNoValidator } from './common/directives/yes-no-validator.directive';
// import { SyncValidatorComponent } from './modules/components/sync-validator/sync-validator.component';
//import { ParentFormOneComponent } from './modules/components/reusable-form/parent-form-one/parent-form-one.component';
//import { ParentFormTwoComponent } from './modules/components/reusable-form/parent-form-two/parent-form-two.component';
/**
 * Import the Custom component CheckMatrix.
 */
 import CheckMatrix from './common/CheckMatrix';
 Formio.use(CheckMatrix);
 //import HeaderComponent from './common/Header';
//import { FormioHeaderComponent } from './modules/components/formio-header/formio-header.component';
// Formio.use(HeaderComponent);


import { FormioButtonComponent } from './modules/components/formio-button/formio-button.component';
import { WillspolicyComponent } from './modules/components/willspolicy/willspolicy.component';
import { FormioSelectComponent } from './modules/components/formio-select/formio-select.component';

 
 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    FormioComponent,
    FormioTwoComponent,
      FormioThreeComponent,
      MinimalformComponent,
      FormioCustomComponent,
      FormioButtonComponent,
      WillspolicyComponent,
      FormioSelectComponent,
    //  FormioHeaderComponent,
      // appYesNoValidator,
      // SyncValidatorComponent,
    // ParentFormOneComponent,
    // ParentFormTwoComponent
   // ReusableSampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormioModule,
    HttpClientModule,
   // MatFormioModule,
    //FlexLayoutModule,
   // InputMaterialModule,
    FormsModule,    
    //MaterialModule,
    SchemaFormModule.forRoot(),
    ReusableFormModule,
    ReactiveFormsModule, BrowserAnimationsModule    
 
  ],
  providers: [AuthGuard,{ provide: WidgetRegistry, useClass: DefaultWidgetRegistry }],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent,WillspolicyComponent,FormioButtonComponent,FormioSelectComponent]
})
export class AppModule { 

  constructor(private injector: Injector) {
    const elements: any[] = [
      [WillspolicyComponent, 'wills-policy-one'],
      [FormioButtonComponent, 'my-ele-two'],
      [FormioSelectComponent,'my-ele-three']
    ];
    
    for (const [component, name] of elements) {
        const htmlElement = createCustomElement(
          component, {injector: this.injector});
        customElements.define(name, htmlElement);
      }
    
   
  }
  ngDoBootstrap() {
  }

}
