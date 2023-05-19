import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-form-header',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './form-header.component.html',
})
export class FormHeaderComponent {
    @Input() imageUrl!: string;
    @Input() imageStyleClass!: string;
    @Input() header!: string | undefined;
    @Input() subHeader!: string;
    //{ required: true }
}
