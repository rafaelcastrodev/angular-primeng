import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-message',
    templateUrl: './header-message.component.html',
    styleUrl: './header-message.component.scss',
})
export class HeaderMessageComponent {
    @Input({ required: true }) text: string = '';
    @Input() icon: string = '';
    @Input() styleClass: string = '';
    @Input() severity: string = '';
    @Input() actionButton: string = '';
    @Output() onActionClick: EventEmitter<unknown> = new EventEmitter();

    clickOnAction() {
        this.onActionClick.emit();
    }
}
