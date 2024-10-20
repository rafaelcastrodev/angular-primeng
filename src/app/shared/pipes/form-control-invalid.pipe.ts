import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Pipe({
    name: 'formControlInvalid',
    pure: false,
})
export class FormControlInvalidPipe implements PipeTransform {
    transform(control: AbstractControl): boolean {
        return control.invalid && control.dirty;
    }
}
