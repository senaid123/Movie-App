import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

 export function firstLetterUppercase() : ValidatorFn {
    return(control: AbstractControl<any, any>): ValidationErrors | null =>{
        const value : string = <string>control.value;
        if(!value) return null;
        if(value.length === 0) return null;

        const firstLetter : string = value[0];

        if(firstLetter !== firstLetter.toUpperCase()){
            return {
                firstLetterUppercase  :{
                    message: 'Tge first letter must be uppercase',
                }
            }
        }
        return null;
    }
 }
