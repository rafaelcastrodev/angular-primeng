import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-form-header',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './form-header.component.html',
})
export class FormHeaderComponent {
    @Input({ required: true }) imageUrl!: string;
    @Input() imageStyleClass!: string;
    @Input({ required: true }) header!: string | undefined;
    @Input() subHeader!: string;
}
