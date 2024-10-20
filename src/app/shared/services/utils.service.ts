import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class UtilsService {
    static cloneObject(obj: any): any {
        return JSON.parse(JSON.stringify(obj));
    }

    static formatDateString(input: string): string {
        if (!input) {
            return '';
        }
        const [day, month, year] = input.split('/');

        return `${year}-${month}-${day}`;
    }

    static formatLocaleDateString(input: string): string {
        if (!input) {
            return '';
        }

        const [year, month, day] = input.split('-');

        return `${day}/${month}/${year}`;
    }

    static getStringDateFromDate(date: Date): string {
        if (!date) {
            return '';
        }
        const year = date.getFullYear();
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const day = ('0' + date.getDate()).slice(-2);
        return `${year}-${month}-${day}`;
    }
}
