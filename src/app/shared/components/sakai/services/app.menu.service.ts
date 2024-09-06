import { Injectable } from '@angular/core';

/**MODELS */
import { appRoutesNames } from '@app/app-routes-names';
import { mainRoutesNames } from '@main/main-routes-names';
import { MenuItem } from 'primeng/api';
import { Subject } from 'rxjs';
import { MenuChangeEvent } from './api/menuchangeevent';

@Injectable({
    providedIn: 'root',
})
export class MenuService {
    private menuSource = new Subject<MenuChangeEvent>();
    private resetSource = new Subject();

    menuSource$ = this.menuSource.asObservable();
    resetSource$ = this.resetSource.asObservable();

    onMenuStateChange(event: MenuChangeEvent) {
        this.menuSource.next(event);
    }

    reset() {
        this.resetSource.next(true);
    }

    getMenuItems(): MenuItem[] {
        return [
            {
                label: mainRoutesNames.HOME.label,
                items: [
                    {
                        label: mainRoutesNames.DASHBOARD.label,
                        icon: mainRoutesNames.DASHBOARD.icon,
                        routerLink: [`${mainRoutesNames.DASHBOARD.url}`],
                    },
                    {
                        label: mainRoutesNames.REPORTS.label,
                        icon: mainRoutesNames.REPORTS.icon,
                        routerLink: [`${mainRoutesNames.REPORTS.url}`],
                    },
                ],
            },
            {
                label: mainRoutesNames.MANAGEMENT.label,
                items: [
                    {
                        label: mainRoutesNames.USERS.label,
                        icon: mainRoutesNames.USERS.icon,
                        routerLink: [`${mainRoutesNames.USERS.url}`],
                    },
                    {
                        label: mainRoutesNames.DEVICES.label,
                        icon: mainRoutesNames.DEVICES.icon,
                        routerLink: [`${mainRoutesNames.DEVICES.url}`],
                    },
                    // {
                    //     label: 'Float Label',
                    //     icon: 'pi pi-fw pi-bookmark',
                    //     routerLink: ['/demo/uikit/floatlabel'],
                    // },
                    // {
                    //     label: 'Invalid State',
                    //     icon: 'pi pi-fw pi-exclamation-circle',
                    //     routerLink: ['/demo/uikit/invalidstate'],
                    // },
                    // {
                    //     label: 'Button',
                    //     icon: 'pi pi-fw pi-box',
                    //     routerLink: ['/demo/uikit/button'],
                    // },
                    // {
                    //     label: 'Table',
                    //     icon: 'pi pi-fw pi-table',
                    //     routerLink: ['/demo/uikit/table'],
                    // },
                    // {
                    //     label: 'List',
                    //     icon: 'pi pi-fw pi-list',
                    //     routerLink: ['/demo/uikit/list'],
                    // },
                    // {
                    //     label: 'Tree',
                    //     icon: 'pi pi-fw pi-share-alt',
                    //     routerLink: ['/demo/uikit/tree'],
                    // },
                    // {
                    //     label: 'Panel',
                    //     icon: 'pi pi-fw pi-tablet',
                    //     routerLink: ['/demo/uikit/panel'],
                    // },
                    // {
                    //     label: 'Overlay',
                    //     icon: 'pi pi-fw pi-clone',
                    //     routerLink: ['/demo/uikit/overlay'],
                    // },
                    // {
                    //     label: 'Media',
                    //     icon: 'pi pi-fw pi-image',
                    //     routerLink: ['/demo/uikit/media'],
                    // },
                    // {
                    //     label: 'Menu',
                    //     icon: 'pi pi-fw pi-bars',
                    //     routerLink: ['/demo/uikit/menu'],
                    //     routerLinkActiveOptions: {
                    //         paths: 'subset',
                    //         queryParams: 'ignored',
                    //         matrixParams: 'ignored',
                    //         fragment: 'ignored',
                    //     },
                    // },
                    // {
                    //     label: 'Message',
                    //     icon: 'pi pi-fw pi-comment',
                    //     routerLink: ['/demo/uikit/message'],
                    // },
                    // {
                    //     label: 'File',
                    //     icon: 'pi pi-fw pi-file',
                    //     routerLink: ['/demo/uikit/file'],
                    // },
                    // {
                    //     label: 'Chart',
                    //     icon: 'pi pi-fw pi-chart-bar',
                    //     routerLink: ['/demo/uikit/charts'],
                    // },
                    // {
                    //     label: 'Misc',
                    //     icon: 'pi pi-fw pi-circle',
                    //     routerLink: ['/demo/uikit/misc'],
                    // },
                ],
            },
            // {
            //     label: 'Prime Blocks',
            //     items: [
            //         {
            //             label: 'Free Blocks',
            //             icon: 'pi pi-fw pi-eye',
            //             routerLink: ['/demo/blocks'],
            //             badge: 'NEW',
            //         },
            //     ],
            // },
            // {
            //     label: 'Pages',
            //     icon: 'pi pi-fw pi-briefcase',
            //     items: [
            //         {
            //             label: 'Landing',
            //             icon: 'pi pi-fw pi-globe',
            //             routerLink: ['/landing'],
            //         },
            //         {
            //             label: 'Auth',
            //             icon: 'pi pi-fw pi-user',
            //             items: [
            //                 {
            //                     label: 'Login',
            //                     icon: 'pi pi-fw pi-sign-in',
            //                     routerLink: ['/demo-auth/login'],
            //                 },
            //                 {
            //                     label: 'Error',
            //                     icon: 'pi pi-fw pi-times-circle',
            //                     routerLink: ['/demo-auth/error'],
            //                 },
            //                 {
            //                     label: 'Access Denied',
            //                     icon: 'pi pi-fw pi-lock',
            //                     routerLink: ['/demo-auth/access'],
            //                 },
            //             ],
            //         },
            //         {
            //             label: 'Crud',
            //             icon: 'pi pi-fw pi-pencil',
            //             routerLink: ['/demo/pages/crud'],
            //         },
            //         {
            //             label: 'Timeline',
            //             icon: 'pi pi-fw pi-calendar',
            //             routerLink: ['/demo/pages/timeline'],
            //         },
            //         {
            //             label: 'Not Found',
            //             icon: 'pi pi-fw pi-exclamation-circle',
            //             routerLink: ['/demo-notfound'],
            //         },
            //         {
            //             label: 'Empty',
            //             icon: 'pi pi-fw pi-circle-off',
            //             routerLink: ['/demo/pages/empty'],
            //         },
            //     ],
            // },
            // {
            //     label: 'Hierarchy',
            //     items: [
            //         {
            //             label: 'Submenu 1',
            //             icon: 'pi pi-fw pi-bookmark',
            //             items: [
            //                 {
            //                     label: 'Submenu 1.1',
            //                     icon: 'pi pi-fw pi-bookmark',
            //                     items: [
            //                         {
            //                             label: 'Submenu 1.1.1',
            //                             icon: 'pi pi-fw pi-bookmark',
            //                         },
            //                         {
            //                             label: 'Submenu 1.1.2',
            //                             icon: 'pi pi-fw pi-bookmark',
            //                         },
            //                         {
            //                             label: 'Submenu 1.1.3',
            //                             icon: 'pi pi-fw pi-bookmark',
            //                         },
            //                     ],
            //                 },
            //                 {
            //                     label: 'Submenu 1.2',
            //                     icon: 'pi pi-fw pi-bookmark',
            //                     items: [
            //                         {
            //                             label: 'Submenu 1.2.1',
            //                             icon: 'pi pi-fw pi-bookmark',
            //                         },
            //                     ],
            //                 },
            //             ],
            //         },
            //         {
            //             label: 'Submenu 2',
            //             icon: 'pi pi-fw pi-bookmark',
            //             items: [
            //                 {
            //                     label: 'Submenu 2.1',
            //                     icon: 'pi pi-fw pi-bookmark',
            //                     items: [
            //                         {
            //                             label: 'Submenu 2.1.1',
            //                             icon: 'pi pi-fw pi-bookmark',
            //                         },
            //                         {
            //                             label: 'Submenu 2.1.2',
            //                             icon: 'pi pi-fw pi-bookmark',
            //                         },
            //                     ],
            //                 },
            //                 {
            //                     label: 'Submenu 2.2',
            //                     icon: 'pi pi-fw pi-bookmark',
            //                     items: [
            //                         {
            //                             label: 'Submenu 2.2.1',
            //                             icon: 'pi pi-fw pi-bookmark',
            //                         },
            //                     ],
            //                 },
            //             ],
            //         },
            //     ],
            // },
        ];
    }
}
