import { Injectable } from '@angular/core';

/**MODELS */
import { SeverityModel } from '@core/models/severity.model';

/**SERVICES */
import { MessageService } from 'primeng/api';

@Injectable({ providedIn: 'root' })
export class ToastService {
    constructor(private _messageService: MessageService) {}

    clear(id?: string, message?: string) {
        if (id && message) {
            this.error(
                `System tried to use ID: ${id} and MESSAGE: ${message} to clear Toast. Please choose only one parameter.`
            );
            return;
        }
        if (message) {
            id = this.generateToastId(message);
        }
        this._messageService.clear(id);
    }

    present(
        severity: SeverityModel,
        title: string,
        message: string,
        id?: string
    ) {
        this._messageService.add({
            severity: severity,
            summary: title,
            detail: message,
            id: id ? id : this.generateToastId(message),
        });
    }

    info(message: string, title?: string, id?: string) {
        this.present('info', title ? title : 'Information', message, id);
    }

    warn(message: string, title?: string, id?: string) {
        this.present('warn', title ? title : 'Warning', message, id);
    }

    error(message: string, title?: string, id?: string) {
        this.present(
            'error',
            title ? title : 'Something wrong happened',
            message,
            id
        );
    }

    success(message: string, title?: string, id?: string) {
        this.present('success', title ? title : 'Success', message, id);
    }

    private generateToastId(message: string): string {
        let trimmedString = message.slice(0, 36);
        trimmedString = trimmedString.trim().replace(/[^a-zA-Z0-9]/g, '');
        return trimmedString;
    }
}
