import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse } from '@angular/common/http';

/**MODELS */
import { environment as env } from '@env';
import { CACHEABLE_ROUTES } from './http-cacheable-routes.constants';

@Injectable({
    providedIn: 'root',
})
export class CacheService {
    private _cache = new Map<string, HttpResponse<any>>();

    get(req: HttpRequest<any>): HttpResponse<any> | undefined {
        const url = this.getClearUrl(req.urlWithParams);
        const fromCache: HttpResponse<any> | undefined = this._cache.get(url);

        return fromCache;
    }

    set(req: HttpRequest<any>, response: HttpResponse<any>): void {
        const url = this.getClearUrl(req.urlWithParams);
        this._cache.set(url, response);
    }

    isCacheable(req: HttpRequest<any>): boolean {
        return CACHEABLE_ROUTES.some((route) => req.url.includes(route));
    }

    clear(): void {
        this._cache.clear();
    }

    delete(url: string): void {
        const clearedUrl = this.getClearUrl(url);
        const urlWithoutParams = clearedUrl.split('?')[0];
        const cacheKeys = Array.from(this._cache.keys());
        cacheKeys.forEach((key) => {
            if (key.includes(urlWithoutParams)) {
                this._cache.delete(key);
            }
        });
    }

    private getClearUrl(url: string): string {
        const baseurl: string = `${env.URL_API}/`;
        return url.replaceAll(baseurl, '');
    }
}
