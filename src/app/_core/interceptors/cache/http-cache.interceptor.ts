import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CacheService } from './http-cache.service';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
    constructor(private _cacheService: CacheService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.method !== 'GET') {
            this._cacheService.delete(req.url);

            return next.handle(req).pipe(
                tap((event) => {
                    if (event instanceof HttpResponse) {
                        this._cacheService.set(req, event);
                    }
                })
            );
        }

        // Don't cache if explicitly told not to
        if (req.headers.get('X-No-Cache')?.toLowerCase() === 'true' || req.params.get('nocache')?.toLowerCase() === 'true') {
            return next.handle(req);
        }

        // Check if the request is cacheable
        if (!this._cacheService.isCacheable(req)) {
            return next.handle(req);
        }

        // Check if we have a cached response
        const cachedResponse = this._cacheService.get(req);
        if (cachedResponse) {
            return of(cachedResponse);
        }

        // If not cached, make the request and cache the response
        return next.handle(req).pipe(
            tap((event) => {
                if (event instanceof HttpResponse) {
                    this._cacheService.set(req, event);
                }
            })
        );
    }
}
