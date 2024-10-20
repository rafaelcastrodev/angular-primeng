import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'cpfFormat',
})
export class CpfFormatPipe implements PipeTransform {
    transform(value: string): string {
        if (!value) {
            return '';
        }

        value = value.replace(/\D/g, ''); // Remove non-numeric characters

        if (value.length > 3) {
            value = value.substring(0, 3) + '.' + value.substring(3);
        }

        if (value.length > 6) {
            value =
                value.substring(0, 6) +
                '.' +
                value.substring(6, 9) +
                '-' +
                value.substring(9);
        }

        return value;
    }
}
