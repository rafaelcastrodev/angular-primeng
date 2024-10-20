import { Component, EventEmitter, Input, Output } from '@angular/core';

/**MODELS */

/**SERVICES */

@Component({
    selector: 'app-page-header',
    templateUrl: './page-header.component.html',
    styleUrl: './page-header.component.scss',
})
export class PageHeaderComponent {
    @Input() styleClass: string = '';
    @Input() icon: string = '';
    @Input() title: string = '';
}
