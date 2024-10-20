import { SeverityModel } from '@core/models/severity.model';
import { MenuItem } from 'primeng/api';

export type DialogSeverityModel =
    | SeverityModel
    | 'primary'
    | 'secondary'
    | 'warning'
    | 'danger'
    | undefined;

export interface DialogMessageButtonInterface extends MenuItem {
    payload?: any;
    handlerFn?: any;
    color?: DialogSeverityModel;
    text?: boolean;
    keepDialogOpen?: boolean;
}

export interface DialogMessageOptionsInterface {
    header?: string;
    icon?: string | 'no-icon';
    severity?: DialogSeverityModel;
    closable?: boolean;
    error?: any;
    maximizable?: boolean;
    closeOnEscape?: boolean;
    content: any;
    styleClass?: string;
    buttons?: DialogMessageButtonInterface[];
    byPassHandlers?: boolean | 'dismiss';
    beforePresentFn?: any; //callback Handler
    afterPresentFn?: any; //callback Handler
    beforeCloseFn?: any; //callback Handler
    afterCloseFn?: any; //callback Handler
}

export function convertSeverityToButton(severity: string | undefined): string {
    if (!severity) return '';

    let button: string = severity;
    switch (severity) {
        case 'error':
            button = 'danger';
            break;
        case 'warn':
            button = 'warning';
            break;
    }
    return button;
}
