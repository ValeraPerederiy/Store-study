import { AbstractControl, ValidationErrors } from "@angular/forms";

export function phoneValidator(control : AbstractControl):ValidationErrors | null{
    const phoneRegEx = /^(?:\+38)?(0\d{9})$/;
    const value = control.value;

    const isValid = phoneRegEx.test(value);

    if(isValid){
        return null
    }else{
        return {'phone': 'incorrect phone number'}
    }

}