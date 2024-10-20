import { AbstractControl, ValidationErrors } from '@angular/forms';

export function isInvalidCNPJValidator(
    control: AbstractControl
): ValidationErrors | null {
    const cnpj = control.value;

    if (cnpj === null || cnpj === '') {
        return null; // Allow empty values, consider adding 'required' validator if necessary
    }

    // Remove non-digit characters from the CNPJ
    const cleanCNPJ = cnpj.replace(/\D/g, '');

    // CNPJ must have 14 digits
    if (cleanCNPJ.length !== 14) {
        return { isInvalidCNPJ: true };
    }

    // Check for repeated digits
    if (/^(\d)\1+$/.test(cleanCNPJ)) {
        return { isInvalidCNPJ: true };
    }

    // Validate the first verification digit
    let sum = 0;
    let weight = 5;
    for (let i = 0; i < 12; i++) {
        sum += parseInt(cleanCNPJ.charAt(i), 10) * weight;
        weight = weight === 2 ? 9 : weight - 1;
    }
    let verificationDigit = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (verificationDigit !== parseInt(cleanCNPJ.charAt(12), 10)) {
        return { isInvalidCNPJ: true };
    }

    // Validate the second verification digit
    sum = 0;
    weight = 6;
    for (let i = 0; i < 13; i++) {
        sum += parseInt(cleanCNPJ.charAt(i), 10) * weight;
        weight = weight === 2 ? 9 : weight - 1;
    }
    verificationDigit = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (verificationDigit !== parseInt(cleanCNPJ.charAt(13), 10)) {
        return { isInvalidCNPJ: true };
    }

    return null; // CNPJ is valid
}
