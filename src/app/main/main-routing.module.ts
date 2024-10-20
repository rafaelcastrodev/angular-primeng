import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

/**MODELS */
import { mainRoutesNames } from './main-routes-names';

/**GUARDS */
import { RoleCanActivateGuard } from '@core/guards/can-activate/role-can-activate.guard';

const mainRoutes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: '',
                redirectTo: mainRoutesNames.DASHBOARD.url,
                pathMatch: 'full',
            },
            {
                path: mainRoutesNames.DASHBOARD.url,
                loadChildren: () =>
                    import('./dashboard/dashboard.module').then(
                        (m) => m.DashboardModule
                    ),
                canActivate: [RoleCanActivateGuard],
            },
            {
                path: mainRoutesNames.USERS.url,
                loadChildren: () =>
                    import('./users/users.module').then((m) => m.UsersModule),
                canActivate: [RoleCanActivateGuard],
            },
        ],
    },
];

export const MAIN_ROUTES = RouterModule.forChild(mainRoutes);
