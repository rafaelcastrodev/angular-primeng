import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

/** SERVICES */
import { DialogMessage } from '@core/components/dialog-message/services/dialog-message.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    private maxAutoRetries = 1;

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        // Do not automatically process the error explicitly told not to do so
        if (
            request.headers.get('X-No-Error')?.toLowerCase() === 'true' ||
            request.params.get('noerror')?.toLowerCase() === 'true'
        ) {
            return next.handle(request);
        }

        return next.handle(request).pipe(
            retry(this.maxAutoRetries), // Automatic retry
            catchError((error: HttpErrorResponse) =>
                this.handleError(error, request, next)
            )
        );
    }

    private handleError(
        error: HttpErrorResponse,
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<never> {
        if (error.status === 0) {
            // A client-side or network error occurred
            DialogMessage.error(
                'Something unexpected happened!',
                'A network or client error occurred.'
            );
            console.error(
                'A client-side or network error occurred:',
                error.error
            );
        } else {
            // The backend returned an unsuccessful response code
            DialogMessage.error(
                'Something unexpected happened!',
                error.error.detail || 'An error occurred on the server.'
            );

            console.error(
                `Backend returned code ${error.status}, body was:`,
                error.error
            );
        }
        return throwError(
            () => new Error('Something bad happened; please try again later.')
        );
    }
}
