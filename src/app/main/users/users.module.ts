import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersDetailsComponent } from './users-details/users-details.component';

/**GUARDS */
import { CanDeactivateFormGuard } from '@app/_core/guards/can-deactivate/form-can-deactivate.guard';

/**MODULES */
import { SharedModule } from '@shared/shared.module';

@NgModule({
    declarations: [UsersComponent, UsersListComponent, UsersDetailsComponent],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild([
            {
                path: '',
                component: UsersListComponent,
            },
            {
                path: ':id/editar',
                component: UsersDetailsComponent,
                canDeactivate: [CanDeactivateFormGuard],
            },
            {
                path: 'new',
                component: UsersDetailsComponent,
                canDeactivate: [CanDeactivateFormGuard],
            },
        ]),
    ],
})
export class UsersModule {}
