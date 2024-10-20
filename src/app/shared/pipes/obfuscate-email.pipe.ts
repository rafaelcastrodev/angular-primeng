import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'obfuscateEmail',
})
export class ObfuscateEmailPipe implements PipeTransform {
    transform(value: string): string {
        if (!value || !this.isValidEmail(value)) {
            return value; // Return original value if it's not a valid email
        }

        const [localPart, domain] = value.split('@');
        const obfuscatedLocalPart = this.obfuscateLocalPart(localPart);

        return `${obfuscatedLocalPart}@${domain}`;
    }

    private isValidEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    private obfuscateLocalPart(localPart: string): string {
        if (localPart.length <= 1) {
            return localPart; // Do not obfuscate single-character local parts
        }

        const visiblePart = localPart[0];

        if (localPart.length > 5) {
            return `${visiblePart}*****`;
        }
        const hiddenPart: string = '*'.repeat(localPart.length - 1);

        return `${visiblePart}${hiddenPart}`;
    }
}
