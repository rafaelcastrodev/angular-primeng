import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';

/**MODELS */
import { authRoutesNames } from './auth-routes-names';

/**COMPONENTS */
import { SigninComponent } from './signin/signin.component';

const authRoutes: Routes = [
    {
        path: '',
        component: AuthComponent,
        children: [
            {
                path: '',
                redirectTo: authRoutesNames.SIGNIN.url,
                pathMatch: 'full',
            },
            {
                path: authRoutesNames.SIGNIN.url,
                component: SigninComponent,
            },
        ],
    },
];

export const AUTH_ROUTES = RouterModule.forChild(authRoutes);
