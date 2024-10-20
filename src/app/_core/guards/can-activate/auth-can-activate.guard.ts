import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, createUrlTreeFromSnapshot, CanActivateFn } from '@angular/router';
import { AuthService } from '@app/auth/shared/services/auth.service';
import { appRoutesNames } from '@app/app-routes-names';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export const AuthCanActivateGuard: CanActivateFn = (
    next: ActivatedRouteSnapshot
): Observable<boolean | ReturnType<typeof createUrlTreeFromSnapshot>> => {
    const authService = inject(AuthService);

    return of(true);

    // if (authService.isAuthenticated()) {
    //     return of(true);
    // }

    // return authService.refreshToken().pipe(
    //     map((response) => {
    //         return true;
    //     }),
    //     catchError((error) => {
    //         authService.signOut();
    //         return of(
    //             createUrlTreeFromSnapshot(next, ['/', appRoutesNames.AUTH.url])
    //         );
    //     })
    // );
};
