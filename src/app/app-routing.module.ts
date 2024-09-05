import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*MODELS*/
import { appRoutesNames } from './app-routes-names';

/**GUARDS */
import { AuthGuard } from '@core/guards/can-activate/auth-can-activate.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: appRoutesNames.MAIN.url,
        pathMatch: 'full',
    },
    {
        path: appRoutesNames.MAIN.url,
        loadChildren: () =>
            import('./main/main.module').then((m) => m.MainModule),
        canActivate: [AuthGuard],
    },
    {
        path: appRoutesNames.AUTH.url,
        loadChildren: () =>
            import('./auth/auth.module').then((m) => m.AuthModule),
    },
    {
        path: '**',
        loadChildren: () =>
            import('./not-found/not-found.module').then(
                (m) => m.NotFoundModule
            ),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
