import { Component, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';

/**MODELS */
import { MenuItem } from 'primeng/api';
import { filter, Subscription } from 'rxjs';
import { UserInterface } from '@app/main/users/shared/models/user.interface';

/**SERVICES */
import { MenuService } from '../services/app.menu.service';
import { LayoutService } from '@shared/components/sakai/services/app.layout.service';
import { AuthService } from '@app/auth/shared/services/auth.service';

@Component({
    selector: '[app-menuitem]',
    template: `
        <ng-container>
            <div *ngIf="root && hasPermission(item) && item.visible !== false" class="layout-menuitem-root-text">
                {{ item.label }}
            </div>
            <a
                *ngIf="hasPermission(item) && (!item.routerLink || item.items) && item.visible !== false"
                [attr.href]="item.url"
                (click)="itemClick($event)"
                [ngClass]="item.class"
                [attr.target]="item.target"
                tabindex="0"
                pRipple
            >
                <i [ngClass]="item.icon" class="layout-menuitem-icon"></i>
                <span class="layout-menuitem-text">{{ item.label }}</span>
                <i class="pi pi-fw pi-angle-down layout-submenu-toggler" *ngIf="item.items"></i>
            </a>

            <a
                *ngIf="hasPermission(item) && item.routerLink && !item.items && item.visible !== false"
                (click)="itemClick($event)"
                [ngClass]="item.class"
                [routerLink]="item.routerLink"
                routerLinkActive="active-route"
                [routerLinkActiveOptions]="
                    item.routerLinkActiveOptions || {
                        paths: 'exact',
                        queryParams: 'ignored',
                        matrixParams: 'ignored',
                        fragment: 'ignored',
                    }
                "
                [fragment]="item.fragment"
                [queryParamsHandling]="item.queryParamsHandling"
                [preserveFragment]="item.preserveFragment"
                [skipLocationChange]="item.skipLocationChange"
                [replaceUrl]="item.replaceUrl"
                [state]="item.state"
                [queryParams]="item.queryParams"
                [attr.target]="item.target"
                tabindex="0"
                pRipple
            >
                <i [ngClass]="item.icon" class="layout-menuitem-icon"></i>
                <span class="layout-menuitem-text">{{ item.label }}</span>
                <i class="pi pi-fw pi-angle-down layout-submenu-toggler" *ngIf="item.items"></i>
            </a>

            <ul *ngIf="item.items && item.visible !== false" [@children]="submenuAnimation">
                <ng-template ngFor let-child let-i="index" [ngForOf]="item.items">
                    <ng-container *ngIf="hasPermission(child)">
                        <li app-menuitem [item]="child" [index]="i" [parentKey]="key" [class]="child.badgeClass"></li>
                    </ng-container>
                </ng-template>
            </ul>
        </ng-container>
    `,
    animations: [
        trigger('children', [
            state(
                'collapsed',
                style({
                    height: '0',
                })
            ),
            state(
                'expanded',
                style({
                    height: '*',
                })
            ),
            transition('collapsed <=> expanded', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
        ]),
    ],
})
export class AppMenuitemComponent implements OnInit, OnDestroy {
    @Input() item: any;
    @Input() index!: number;
    @Input() @HostBinding('class.layout-root-menuitem') root!: boolean;
    @Input() parentKey!: string;
    active = false;
    menuSourceSubscription: Subscription;
    menuResetSubscription: Subscription;
    key: string = '';
    currentAuthUser!: UserInterface | undefined;
    constructor(
        public layoutService: LayoutService,
        public router: Router,
        private _menuService: MenuService,
        private _authService: AuthService
    ) {
        this.menuSourceSubscription = this._menuService.menuSource$.subscribe((value: any) => {
            Promise.resolve(null).then(() => {
                if (value.routeEvent) {
                    this.active = value.key === this.key || value.key.startsWith(this.key + '-') ? true : false;
                } else {
                    if (value.key !== this.key && !value.key.startsWith(this.key + '-')) {
                        this.active = false;
                    }
                }
            });
        });

        this.menuResetSubscription = this._menuService.resetSource$.subscribe(() => {
            this.active = false;
        });

        this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((params) => {
            if (this.item.routerLink) {
                this.updateActiveStateFromRoute();
            }
        });
    }

    get submenuAnimation() {
        return this.root ? 'expanded' : this.active ? 'expanded' : 'collapsed';
    }

    @HostBinding('class.active-menuitem')
    get activeClass() {
        return this.active && !this.root;
    }

    ngOnInit() {
        // this.currentAuthUser = this._authService.getCurrentAuthUser();
        this.key = this.parentKey ? this.parentKey + '-' + this.index : String(this.index);

        if (this.item.routerLink) {
            this.updateActiveStateFromRoute();
        }
    }

    ngOnDestroy() {
        if (this.menuSourceSubscription) {
            this.menuSourceSubscription.unsubscribe();
        }

        if (this.menuResetSubscription) {
            this.menuResetSubscription.unsubscribe();
        }
    }

    hasPermission(routeConfig: MenuItem): boolean {
        const isPublicRoute = routeConfig['allowed_roles'].length === 0;
        const isRoleAllowed = routeConfig['allowed_roles'].includes(this.currentAuthUser?.role!.slug);
        return isPublicRoute || isRoleAllowed;
    }

    updateActiveStateFromRoute() {
        let activeRoute = this.router.isActive(this.item.routerLink[0], {
            paths: 'exact',
            queryParams: 'ignored',
            matrixParams: 'ignored',
            fragment: 'ignored',
        });

        if (activeRoute) {
            this._menuService.onMenuStateChange({
                key: this.key,
                routeEvent: true,
            });
        }
    }

    itemClick(event: Event) {
        // avoid processing disabled items
        if (this.item.disabled) {
            event.preventDefault();
            return;
        }

        // execute command
        if (this.item.command) {
            this.item.command({ originalEvent: event, item: this.item });
        }

        // toggle active state
        if (this.item.items) {
            this.active = !this.active;
        }

        this._menuService.onMenuStateChange({ key: this.key });
    }
}
