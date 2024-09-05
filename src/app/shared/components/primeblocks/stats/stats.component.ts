import { Component, Input } from '@angular/core';

/**MODELS */

/**SERVICES */

@Component({
    selector: 'primeblocks-stats',
    templateUrl: './stats.component.html',
    styleUrl: './stats.component.scss',
})
export class PrimeblocksStatsComponent {
    @Input() styleClass: string = '';
    @Input() title: string = 'Missing Title';
    @Input() value: string = 'x x x';
    @Input() icon: string = 'pi-question';
    @Input() iconColor: string = 'red';
    @Input() highlightedComment: string = 'Missing';
    @Input() highlightColor: string = 'red';
    @Input() comment: string = ' comment';
}
