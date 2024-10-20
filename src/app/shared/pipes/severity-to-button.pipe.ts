import { Pipe, PipeTransform } from '@angular/core';
import { convertSeverityToButton } from '@core/components/dialog-message/models/dialog-message-options.interface';

@Pipe({
    name: 'severityToButton',
})
export class SeverityToButtonPipe implements PipeTransform {
    transform(value: string | undefined): string {
        return convertSeverityToButton(value);
    }
}
