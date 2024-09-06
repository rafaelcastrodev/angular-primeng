import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

/**MODELS */
import { mainRoutesNames } from './main-routes-names';

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
            },
            {
                path: mainRoutesNames.USERS.url,
                loadChildren: () =>
                    import('./users/users.module').then((m) => m.UsersModule),
            },
            {
                path: 'demo',
                loadChildren: () =>
                    import('./demo/demo.module').then((m) => m.DemoModule),
            },
            {
                path: 'demo/:id',
                loadChildren: () =>
                    import('./demo-detail/demo-detail.module').then(
                        (m) => m.DemoDetailModule
                    ),
            },
        ],
    },
];

export const MAIN_ROUTES = RouterModule.forChild(mainRoutes);
