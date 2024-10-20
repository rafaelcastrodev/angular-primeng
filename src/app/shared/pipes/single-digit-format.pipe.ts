import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'singleDigitFormat',
})
export class SingleDigitFormatPipe implements PipeTransform {
    transform(value: string | number): string {
        const n: number = Number(value);
        return n < 10 ? '0' + n : String(n);
    }
}
