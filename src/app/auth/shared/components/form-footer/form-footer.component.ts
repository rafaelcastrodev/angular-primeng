import { Component, Input } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { RouterModule } from '@angular/router';

/**MODELS */
import { appRoutesNames } from '@app/app-routes-names';

@Component({
    selector: 'app-form-footer',
    standalone: true,
    imports: [DividerModule, RouterModule],
    templateUrl: './form-footer.component.html',
})
export class FormFooterComponent {
    @Input() dividerText: string = 'OR';
    @Input({ required: true }) highlighText!: string;
    @Input({ required: true }) urlText!: string;
    @Input({ required: true }) url!: string | undefined;
    appRoutesNames = appRoutesNames;
}
