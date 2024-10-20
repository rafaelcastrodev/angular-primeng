import { Component, EventEmitter, inject, Input, Output } from '@angular/core';

/**MODELS */
import { MenuItem, PrimeIcons } from 'primeng/api';
import { ButtonActionInterface } from './models/button-action.interface';
// import { ActionsList } from '@main/actions/shared/models/action.interface';

/**SERVICES */
// import { ActionsService } from '@main/actions/shared/services/actions.service';

@Component({
    selector: 'app-button-action-menu',
    templateUrl: './button-action-menu.component.html',
    styleUrl: './button-action-menu.component.scss',
})
export class ButtonActionMenuComponent {
    // actionsService = inject(ActionsService);

    @Input() payload!: unknown;
    @Input() options: MenuItem[] = [
        {
            id: 'update',
            label: 'Editar',
            icon: PrimeIcons.PENCIL,
        },
        {
            id: 'delete',
            label: 'Remover',
            icon: PrimeIcons.TRASH,
        },
    ];
    @Output() actionClick: EventEmitter<ButtonActionInterface> =
        new EventEmitter();

    onTakeAction(item: MenuItem) {
        this.actionClick.emit({
            payload: this.payload,
            id: item.id,
        });
    }
}
