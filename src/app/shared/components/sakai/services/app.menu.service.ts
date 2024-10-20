import { inject, Injectable } from '@angular/core';

/**MODELS */
import { AppMenuItems } from '../models/app-menu-items.constants';
import { mainRoutesNames } from '@main/main-routes-names';
import { MenuItem } from 'primeng/api';
import { Subject } from 'rxjs';

/**SERVICES */
import { MenuChangeEvent } from './api/menuchangeevent';
import { AuthService } from '@app/auth/shared/services/auth.service';

@Injectable({
    providedIn: 'root',
})
export class MenuService {
    private _menuSource = new Subject<MenuChangeEvent>();
    private _resetSource = new Subject();
    private _authService = inject(AuthService);

    menuSource$ = this._menuSource.asObservable();
    resetSource$ = this._resetSource.asObservable();

    onMenuStateChange(event: MenuChangeEvent) {
        this._menuSource.next(event);
    }

    reset() {
        this._resetSource.next(true);
    }

    getTopbarMenuItems(): MenuItem[] {
        return [AppMenuItems.SIGNOUT];
    }

    getSideMenuItems(): MenuItem[] {
        return [
            {
                allowed_roles: mainRoutesNames.HOME['allowed_roles'],
                label: mainRoutesNames.HOME.label,
                items: [
                    {
                        allowed_roles: mainRoutesNames.DASHBOARD['allowed_roles'],
                        label: mainRoutesNames.DASHBOARD.label,
                        icon: mainRoutesNames.DASHBOARD.icon,
                        routerLink: [`${mainRoutesNames.DASHBOARD.url}`],
                    },
                ],
            },
            {
                allowed_roles: mainRoutesNames.MANAGEMENT['allowed_roles'],
                label: mainRoutesNames.MANAGEMENT.label,
                items: [
                    {
                        allowed_roles: mainRoutesNames.USERS['allowed_roles'],
                        label: mainRoutesNames.USERS.label,
                        icon: mainRoutesNames.USERS.icon,
                        routerLink: [`${mainRoutesNames.USERS.url}`],
                    },
                ],
            },
            {
                allowed_roles: [],
                label: '',
                items: [
                    {
                        allowed_roles: [],
                        label: AppMenuItems.SIGNOUT.label,
                        icon: AppMenuItems.SIGNOUT.icon,
                        action: AppMenuItems.SIGNOUT['action'],
                        title: AppMenuItems.SIGNOUT.title,
                        command: () => this._authService.confirmSignOut(),
                    },
                ],
            },
        ];
    }
}
