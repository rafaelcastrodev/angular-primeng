import { Component, EventEmitter, Input, Output } from '@angular/core';

/**MODELS */
import { MenuItem, PrimeIcons } from 'primeng/api';
import { ButtonActionInterface } from './models/button-action.interface';

/**SERVICES */

@Component({
    selector: 'app-button-action-menu',
    templateUrl: './button-action-menu.component.html',
    styleUrl: './button-action-menu.component.scss',
})
export class ButtonActionMenuComponent {
    @Input() payload!: unknown;
    @Input() options: MenuItem[] = [
        { label: 'Editar', icon: PrimeIcons.PENCIL },
        { label: 'Remover', icon: PrimeIcons.TRASH },
    ];
    @Output() actionClick: EventEmitter<ButtonActionInterface> =
        new EventEmitter();

    onTakeAction(item: MenuItem) {
        this.actionClick.emit({
            payload: this.payload,
            action: item.label,
        });
    }
}
