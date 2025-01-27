import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors, Validator
} from '@angular/forms';
@Directive({
  selector: '[appYesNoValidator]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: appYesNoValidator, multi: true}
]
})
export class appYesNoValidator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const val = control.value;
    if (!val || val.toLowerCase() === 'yes') {
        return null;   // valid
    }
    
    // invalid - validation errors display
    return {
      appYesNoValidator: 'You chose no, no, no!'};  
    //   yesNoValidator: {
    //     isValid: false,
    //     message: "You said, no, no, no." 
    // } 
}
}
