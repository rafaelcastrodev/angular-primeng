import { Component, ElementRef, ViewChild } from '@angular/core';

/**MODELS */
import { MenuItem } from 'primeng/api';
import { AppMenuItems } from '../models/app-menu-items.constants';

/**SERVICES */
import { LayoutService } from '@shared/components/sakai/services/app.layout.service';
import { MenuService } from '../services/app.menu.service';
import { AuthService } from '@app/auth/shared/services/auth.service';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
})
export class AppTopBarComponent {
    @ViewChild('menubutton') menuButton!: ElementRef;
    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;
    @ViewChild('topbarmenu') menu!: ElementRef;
    topbarMenuItems!: MenuItem[];

    constructor(
        public layoutService: LayoutService,
        private _menuService: MenuService,
        private _authService: AuthService
    ) {}

    ngOnInit() {
        this.topbarMenuItems = this._menuService.getTopbarMenuItems();
    }

    clickOnTopMenuItem(item: MenuItem) {
        switch (item['action']) {
            case AppMenuItems.SIGNOUT['action']:
                this._authService.confirmSignOut();
                break;
        }
    }
}
