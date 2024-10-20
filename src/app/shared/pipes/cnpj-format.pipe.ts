import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'cnpjFormat',
})
export class CnpjFormatterPipe implements PipeTransform {
    transform(value: string | number): string {
        const cnpj = value.toString().padStart(14, '0'); // Ensure it's 14 digits

        // Apply CNPJ format: XX.XXX.XXX/0001-XX
        return cnpj.replace(
            /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
            '$1.$2.$3/$4-$5'
        );
    }
}
