import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

/**MODULES */
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { PipesModule } from '@app/shared/pipes/pipes.module';

/**MODELS */
import { DialogMessageButtonInterface } from './models/dialog-message-options.interface';

/**SERVICES */
import { DialogMessage } from './services/dialog-message.service';

@Component({
    selector: 'app-dialog-message',
    standalone: true,
    imports: [CommonModule, DialogModule, ButtonModule, PipesModule],
    templateUrl: './dialog-message.component.html',
    styleUrl: './dialog-message.component.scss',
})
export class DialogMessageComponent {
    dialogMessageService = inject(DialogMessage);
    iconClass: string = '';

    ngOnInit() {
        this.iconClass = this.getIconClass();
    }

    getIconClass(): string {
        const options = this.dialogMessageService.options();
        if (options?.icon) {
            return options.icon;
        }

        const iconMap: any = {
            success: 'pi pi-check-circle text-success',
            error: 'pi pi-times-circle text-error',
            danger: 'pi pi-times-circle text-error',
            warn: 'pi pi-exclamation-triangle text-warning',
            warning: 'pi pi-exclamation-triangle text-warning',
            info: 'pi pi-exclamation-circle text-primary',
            help: 'pi pi-question-circle text-help',
        };

        return iconMap[options?.severity!] || 'pi pi-info-circle text-primary';
    }

    handleButtonClick(button: DialogMessageButtonInterface) {
        if (button.handlerFn && !this.dialogMessageService.options()?.byPassHandlers) {
            button.handlerFn(button.payload);
        }
        if (button.keepDialogOpen) {
            return;
        }

        if (!this.dialogMessageService.options()?.byPassHandlers || this.dialogMessageService.options()?.byPassHandlers === 'dismiss') {
            DialogMessage.dismiss();
        }
    }

    dismissDialog() {
        DialogMessage.dismiss();
    }
}
