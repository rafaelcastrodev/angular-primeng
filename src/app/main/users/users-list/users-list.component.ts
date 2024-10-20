import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

/**MODELS */
import { mainRoutesNames } from '@main/main-routes-names';
import { ButtonActionInterface } from '@shared/components/button-action-menu/models/button-action.interface';
import { PaginatedResourceInterface } from '@core/models/paginated-resource.interface';
import { UserInterface } from '../shared/models/user.interface';

/**SERVICES */
import { UsersAPIService } from '../shared/services/users-api.service';
import { DialogMessage } from '@core/components/dialog-message/services/dialog-message.service';

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss',
})
export class UsersListComponent implements OnInit {
    mainRoutesNames = mainRoutesNames;
    listItemsPaginated!: PaginatedResourceInterface;
    isLoadingResources: boolean = false;
    filters!: PaginatedResourceInterface | undefined;

    constructor(
        private _usersAPIService: UsersAPIService,
        private _router: Router,
        private _acRouter: ActivatedRoute
    ) {}

    ngOnInit() {
        this.getResources();
    }

    async onClickActionMenu(menu: ButtonActionInterface) {
        const user: UserInterface = menu.payload!;

        switch (menu.id) {
            case 'update':
                await this._router.navigate([user.id], {
                    relativeTo: this._acRouter,
                });
                break;
            case 'delete':
                DialogMessage.confirmDialog(
                    'error',
                    'Delete User',
                    `Are you sure you want to delete?:<br>
                    <strong>${user.name}</strong> ?<br><br>
                    This action cannot be undone.`,
                    'Delete',
                    'Cancel',
                    () => this.deleteItem(user)
                );

                break;
            default:
                break;
        }
    }

    onSearch(event: PaginatedResourceInterface) {
        this.filters = event;
        this.getResources(this.filters);
    }

    onPageChange(event: any) {
        if (!this.filters) {
            this.filters = {};
        }
        this.filters.sortby = 'name';
        this.filters.page = event.page;
        this.filters.page_size = event.rows;

        this.getResources(this.filters);
    }

    retryGetResources() {
        this.getResources();
    }

    private async deleteItem(user: UserInterface) {
        try {
            const result = await this._usersAPIService.delete(user.id);

            DialogMessage.success(
                'Deletion completed',
                `${result.message}<br><strong>${user.name}</strong>`
            );

            this.getResources(this.filters);
        } catch (error) {
            console.error(error);
        }
    }

    private async getResources(filters?: PaginatedResourceInterface) {
        try {
            this.isLoadingResources = true;
            // const result = await this._usersAPIService.getAll(filters);
            const result = this.getMockUsers();
            this.listItemsPaginated = result as PaginatedResourceInterface;

            this.filters = filters;
        } catch (error) {
            console.error(error);
        } finally {
            this.isLoadingResources = false;
        }
    }

    private getMockUsers(): PaginatedResourceInterface {
        return {
            page_size: 10,
            page: 0,
            first: 0,
            rows: [
                {
                    id: 'uuid',
                    name: 'Demo 1',
                    email: 'demo1@email.com',
                    role_id: '1',
                    role: { name: 'Admin' },
                },
                {
                    id: 'uuid',
                    name: 'Demo 2',
                    email: 'demo2@email.com',
                    role_id: '2',
                    role: { name: 'Manager' },
                },
            ],
            sortby: 'name',
            total_records: 2,
        };
    }
}
