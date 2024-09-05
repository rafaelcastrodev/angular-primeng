import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

/**MODELS */
import { MenuItem } from 'primeng/api';

/**SERVICES */
import { LayoutService } from '@shared/components/sakai/services/app.layout.service';
import { MenuService } from '../services/app.menu.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
    menuItems: MenuItem[] = [];

    constructor(
        public layoutService: LayoutService,
        private menuService: MenuService
    ) {}

    ngOnInit() {
        this.menuItems = this.menuService.getMenuItems();
    }
}
