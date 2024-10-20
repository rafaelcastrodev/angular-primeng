import { inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { lastValueFrom, map } from 'rxjs';

/**MODELS */
import { environment as env } from '@env';
import { BaseResourceInterface } from '@core/models/base-resource.interface';
import { PaginatedResourceInterface } from '@core/models/paginated-resource.interface';

export abstract class BaseResourcePromiseService<T extends BaseResourceInterface> {
    private _baseUrl: string;
    _http: HttpClient = inject(HttpClient);

    constructor(protected endPointAPI: string) {
        this._baseUrl = `${env.URL_API}/${endPointAPI}`;
    }

    getAll(pagination?: any): Promise<T | PaginatedResourceInterface> {
        const url: string = this._baseUrl;
        const queryParams = this.getRequestParams(pagination);

        return lastValueFrom(this._http.get(url, { params: queryParams }).pipe(map(this.dataToResources.bind(this))));
    }

    getById(resourceId: number | string): Promise<T> {
        const url: string = this._baseUrl;

        return lastValueFrom(this._http.get(`${url}/${resourceId}`).pipe(map(this.dataToResource.bind(this))));
    }

    createOrUpdate(resource: T): Promise<T | any> {
        if (resource.id) {
            return this.update(resource);
        }
        return this.create(resource);
    }

    delete(resourceId: number | string): Promise<any> {
        const url: string = this._baseUrl;

        return lastValueFrom(this._http.delete(`${url}/${resourceId}`));
    }

    create(resource: T): Promise<T | any> {
        const url: string = this._baseUrl;

        return lastValueFrom(this._http.post(url, resource).pipe(map(this.dataToResource.bind(this))));
    }

    update(resource: T): Promise<T | any> {
        const url: string = this._baseUrl;

        return lastValueFrom(this._http.put(`${url}/${resource.id}`, resource).pipe(map(this.dataToResource.bind(this))));
    }

    private getRequestParams(pag: PaginatedResourceInterface): HttpParams {
        if (!pag) {
            return new HttpParams();
        }
        const filters: { [key: string]: number | string } = {};
        pag.requestFilters?.forEach((f: any) => {
            filters[f.id] = f.value;
        });
        delete pag.requestFilters;
        delete pag.rows;

        for (const key in pag) {
            if (pag[key] || String(pag[key]) === '0') {
                filters[key] = pag[key];
            }
        }

        return new HttpParams({ fromObject: filters });
    }

    private dataToResources(jsonData: any): PaginatedResourceInterface {
        return JSON.parse(JSON.stringify(jsonData));
    }

    private dataToResource(jsonData: any): T {
        return jsonData as T;
    }
}
