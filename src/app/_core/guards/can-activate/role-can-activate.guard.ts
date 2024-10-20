import { inject } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    createUrlTreeFromSnapshot,
    CanActivateFn,
} from '@angular/router';
import { Observable, of } from 'rxjs';

/**MODELS */
import { mainRoutesNames } from '@app/main/main-routes-names';
import { UserInterface } from '@app/main/users/shared/models/user.interface';

/**SERVICES */
import { AuthService } from '@app/auth/shared/services/auth.service';
import { DialogMessage } from '@core/components/dialog-message/services/dialog-message.service';

export const RoleCanActivateGuard: CanActivateFn = (
    next: ActivatedRouteSnapshot
): Observable<boolean | ReturnType<typeof createUrlTreeFromSnapshot>> => {
    return of(true);

    // const authService = inject(AuthService);

    // const user: UserInterface | undefined = authService.getCurrentAuthUser();
    // const routeUrl = next.url[0].path;
    // const routeConfig = Object.values(mainRoutesNames).find((route) => route.url === routeUrl);

    // if (!routeConfig) {
    //     return handleUnauthorized();
    // }

    // const isRoleAllowed = user && routeConfig['allowed_roles'].includes(user.role!.slug);
    // const isPublicRoute = routeConfig['allowed_roles'].length === 0;

    // if (isRoleAllowed || isPublicRoute) {
    //     return of(true);
    // }

    // return handleUnauthorized();
};

function handleUnauthorized(): Observable<boolean> {
    DialogMessage.warning(
        'Resource Not Permitted',
        'Your user profile does not have permission to access this feature.'
    );
    return of(false);
}
