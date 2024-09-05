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
        ],
    },
];

export const MAIN_ROUTES = RouterModule.forChild(mainRoutes);
