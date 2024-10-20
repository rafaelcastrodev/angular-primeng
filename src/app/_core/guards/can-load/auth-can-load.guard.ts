import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from '@app/auth/shared/services/auth.service';

/**MODELS */
import { appRoutesNames } from '@app/app-routes-names';

export const AuthCanLoadGuard = (next: ActivatedRouteSnapshot) => {
    const authService = inject(AuthService);
    const router = inject(Router);
    const isAuth = authService.isAuthenticated();

    if (isAuth) {
        return true;
    }
    authService.signOut();
    router.navigate([appRoutesNames.AUTH.url], { replaceUrl: true });
    return false;
};
