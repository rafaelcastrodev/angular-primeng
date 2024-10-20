import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CancelRequestService } from './cancel-requests.service';

@Injectable()
export class CancelRequestInterceptor implements HttpInterceptor {
    constructor(private cancelRequestService: CancelRequestService) {}

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return next
            .handle(request)
            .pipe(takeUntil(this.cancelRequestService.cancel$));
    }
}
