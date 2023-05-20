import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'demo',
    standalone: true,
})
export class DemoPipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        return '';
    }
}
