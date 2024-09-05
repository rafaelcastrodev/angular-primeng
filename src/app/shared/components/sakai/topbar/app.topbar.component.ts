import { Component, ElementRef, ViewChild } from '@angular/core';

/**MODELS */
import { MenuItem } from 'primeng/api';

/**SERVICES */
import { LayoutService } from '@shared/components/sakai/services/app.layout.service';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
})
export class AppTopBarComponent {
    @ViewChild('menubutton') menuButton!: ElementRef;
    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;
    @ViewChild('topbarmenu') menu!: ElementRef;
    items!: MenuItem[];

    constructor(public layoutService: LayoutService) {}
}
