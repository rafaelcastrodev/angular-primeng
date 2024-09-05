import { Component } from '@angular/core';

/**SERVICES */
import { LayoutService } from '@shared/components/sakai/services/app.layout.service';

@Component({
    selector: 'app-footer',
    templateUrl: './app.footer.component.html',
})
export class AppFooterComponent {
    constructor(public layoutService: LayoutService) {}
}
