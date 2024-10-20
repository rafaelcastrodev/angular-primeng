import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, filter, take, switchMap } from 'rxjs/operators';
import { AuthService } from '@app/auth/shared/services/auth.service';

@Injectable({
    providedIn: 'root',
})
export class TokenInterceptor implements HttpInterceptor {
    private _isRefreshing = false;
    private _refreshTokenSubject: BehaviorSubject<string | null> =
        new BehaviorSubject<string | null>(null);

    constructor(private _authService: AuthService) {}

    /**
     * Intercepts HTTP requests to attach JWT tokens to the headers and handles token expiration.
     * @param request - The outgoing HTTP request.
     * @param next - The HTTP handler.
     * @returns An Observable that sends the HTTP event, with the token attached.
     */
    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        // Don't attach token if explicitly told not to
        if (
            request.headers.get('X-No-Token')?.toLowerCase() === 'true' ||
            request.params.get('notoken')?.toLowerCase() === 'true'
        ) {
            return next.handle(request);
        }

        const jwtToken = this._authService.getToken();

        // Attach token if available
        if (jwtToken) {
            request = this.addToken(request, jwtToken);
        }

        // Handle HTTP errors, especially 401 Unauthorized
        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401) {
                    return this.handle401Error(request, next);
                }
                return throwError(() => {
                    this._isRefreshing = false;
                    if (!this._authService.isAuthenticated()) {
                        this._authService.signOut();
                    }
                    return new Error(error.message);
                });
            })
        );
    }

    /**
     * Clones the HTTP request and adds the JWT token in the Authorization header.
     * @param request - The original HTTP request.
     * @param token - The JWT token to be attached.
     * @returns A cloned request with the Authorization header set.
     */
    private addToken(
        request: HttpRequest<any>,
        token: string
    ): HttpRequest<any> {
        if (!request.headers.has('Authorization')) {
            return request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`,
                },
            });
        }
        return request;
    }

    /**
     * Handles the 401 Unauthorized error by refreshing the token and retrying the original request.
     * If multiple requests encounter the same error concurrently, they will wait for the refresh process to complete.
     * @param request - The original HTTP request that resulted in 401.
     * @param next - The HTTP handler to retry the request after refreshing the token.
     * @returns An Observable that retries the original request with a new token.
     */
    private handle401Error(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        if (!this._isRefreshing) {
            this._isRefreshing = true;
            this._refreshTokenSubject.next(null); // Reset token subject to null while refreshing

            return this._authService.refreshToken().pipe(
                switchMap((token: { jwt: string }) => {
                    this._isRefreshing = false;
                    this._refreshTokenSubject.next(token.jwt); // Update the subject with new token
                    return next.handle(this.addToken(request, token.jwt));
                }),
                catchError((err) => {
                    this._isRefreshing = false;
                    this._authService.signOut(); // signout user if refresh fails
                    return throwError(() => new Error(err.message)); // Rethrow the error
                })
            );
        } else {
            // Queue requests and wait until the token refresh completes
            return this._refreshTokenSubject.pipe(
                filter((token) => token !== null),
                take(1),
                switchMap((jwt) =>
                    next.handle(this.addToken(request, jwt as string))
                )
            );
        }
    }
}
