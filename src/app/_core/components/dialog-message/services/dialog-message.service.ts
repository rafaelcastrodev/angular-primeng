import { Injectable, signal } from '@angular/core';

/**MODELS */
import { convertSeverityToButton, DialogMessageOptionsInterface, DialogSeverityModel } from './../models/dialog-message-options.interface';
import { SeverityModel } from '@core/models/severity.model';

@Injectable({
    providedIn: 'root',
})
export class DialogMessage {
    private static _dialogDisplaySignal = signal(false);
    private static _optionsSignal = signal<DialogMessageOptionsInterface | null>(null);

    get dialogDisplay() {
        return DialogMessage._dialogDisplaySignal.asReadonly();
    }

    get options() {
        return DialogMessage._optionsSignal.asReadonly();
    }

    static present(options: DialogMessageOptionsInterface) {
        if (options.beforePresentFn) {
            options.beforePresentFn();
        }
        DialogMessage._optionsSignal.set(options);
        DialogMessage._dialogDisplaySignal.set(true);
        if (options.afterPresentFn) {
            options.afterPresentFn();
        }
    }

    static dismiss() {
        const currentOptions = DialogMessage._optionsSignal();
        if (currentOptions?.beforeCloseFn) {
            currentOptions.beforeCloseFn();
        }
        DialogMessage._dialogDisplaySignal.set(false);
        if (currentOptions?.afterCloseFn) {
            currentOptions.afterCloseFn();
        }
        DialogMessage._optionsSignal.set(null);
    }

    static confirmDialog(
        severity: DialogSeverityModel,
        header: string,
        content: string,
        btnConfirmLabel: string,
        btnCancelLabel: string,
        btnConfirmCallback: any,
        btnCancelCallback?: any
    ) {
        DialogMessage.present({
            severity: severity,
            header: header,
            content: content,
            closable: true,
            buttons: [
                {
                    label: btnCancelLabel,
                    text: true,
                    color: 'secondary',
                    handlerFn: () => (btnCancelCallback ? btnCancelCallback() : () => {}),
                },
                {
                    label: btnConfirmLabel,
                    color: convertSeverityToButton(severity) as DialogSeverityModel,
                    handlerFn: () => btnConfirmCallback(),
                },
            ],
        });
    }

    static success(header: string, message: string) {
        DialogMessage.setDialogBySeverity('success', header, message);
    }

    static error(header: string, message: string) {
        DialogMessage.setDialogBySeverity('error', header, message);
    }

    static warning(header: string, message: string) {
        DialogMessage.setDialogBySeverity('warn', header, message);
    }

    static info(header: string, message: string) {
        DialogMessage.setDialogBySeverity('info', header, message);
    }

    static help(header: string, message: string) {
        DialogMessage.setDialogBySeverity('help', header, message);
    }

    private static setDialogBySeverity(severity: SeverityModel, header: string, content: string) {
        DialogMessage.present({
            severity: severity,
            header: header,
            content: content,
        });
    }
}
