import { inject } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    createUrlTreeFromSnapshot,
} from '@angular/router';
import { map } from 'rxjs';

/**MODELS */
import { appRoutesNames } from '@app/app-routes-names';

/**SERVICES */
import { AuthService } from '@app/auth/shared/services/auth.service';

export const AuthGuard = (next: ActivatedRouteSnapshot) => {
    return inject(AuthService)
        .isAuthenticated()
        .pipe(
            map((isAuthenticated) =>
                isAuthenticated
                    ? true
                    : createUrlTreeFromSnapshot(next, [
                          '/',
                          appRoutesNames.AUTH.url,
                      ])
            )
        );
};
