import { Component, ElementRef } from '@angular/core';

/**SERVICES */
import { LayoutService } from '@shared/components/sakai/services/app.layout.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './app.sidebar.component.html',
})
export class AppSidebarComponent {
    constructor(
        public layoutService: LayoutService,
        public el: ElementRef
    ) {}
}
