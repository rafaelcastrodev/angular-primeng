import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterByAttribute',
})
export class FilterByAttributePipe implements PipeTransform {
    transform(
        value: any,
        attribute: string,
        array: any[],
        returnAttribute?: string
    ): any {
        if (!value || !attribute || !array || array.length === 0) {
            return null;
        }

        const matchedObject = array.find((item) => item[attribute] === value);

        return (
            (returnAttribute
                ? matchedObject[returnAttribute]
                : matchedObject) || null
        );
    }
}
