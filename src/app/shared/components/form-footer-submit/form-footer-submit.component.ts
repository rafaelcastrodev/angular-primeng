import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-form-footer-submit',
    templateUrl: './form-footer-submit.component.html',
    styleUrl: './form-footer-submit.component.scss',
})
export class FormFooterSubmitComponent {
    @Input() isSubmitDisabled: boolean = true;
    @Input() isSubmitLoading: boolean = false;
    @Input() styleClass: string = '';
    @Output() returnClick: EventEmitter<any> = new EventEmitter();

    clickOnReturn() {
        this.returnClick.emit();
    }
}
