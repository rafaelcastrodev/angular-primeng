import { CnpjFormatterPipe } from './cnpj-format.pipe';
import { FilterByAttributePipe } from './filter-by-attribute.pipe';
import { FormControlInvalidPipe } from './form-control-invalid.pipe';
import { HasPermissionPipe } from './has-permission.pipe';
import { ObfuscateEmailPipe } from './obfuscate-email.pipe';
import { SeverityToButtonPipe } from './severity-to-button.pipe';
import { SingleDigitFormatPipe } from './single-digit-format.pipe';

export const pipes: any[] = [
    FormControlInvalidPipe,
    FilterByAttributePipe,
    CnpjFormatterPipe,
    SeverityToButtonPipe,
    ObfuscateEmailPipe,
    SingleDigitFormatPipe,
    HasPermissionPipe,
];
