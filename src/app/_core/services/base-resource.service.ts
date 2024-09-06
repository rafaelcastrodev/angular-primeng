import { inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';

/**MODELS */
import { environment as env } from '@env';
import { BaseResourceInterface } from '@core/models/base-resource.interface';

export abstract class NewBaseResourceService<T extends any> {
    private _baseUrl: string;
    _http: HttpClient = inject(HttpClient);

    constructor(protected endPointAPI: string) {
        this._baseUrl = `${env.URL_API}/${endPointAPI}`;
    }

    getAll(pagination?: any): Observable<T | any> {
        const url: string = this._baseUrl;
        const queryParams = this.getRequestParams(pagination);

        return this._http
            .get(url, { params: queryParams })
            .pipe(map(this.dataToResources.bind(this)));
    }

    getById(resourceId: number | string): Observable<T> {
        const url: string = this._baseUrl;

        return this._http
            .get(`${url}/${resourceId}`)
            .pipe(map(this.dataToResource.bind(this)));
    }

    createOrUpdate(resource: T): Observable<T | any> {
        // if (resource.id) {
        if (resource) {
            return this.update(resource);
        }
        return this.create(resource);
    }

    delete(resourceId: number | string): Observable<any> {
        const url: string = this._baseUrl;

        return this._http.delete(`${url}/${resourceId}`);
    }

    create(resource: T): Observable<T | any> {
        const url: string = this._baseUrl;

        return this._http
            .post(url, resource)
            .pipe(map(this.dataToResource.bind(this)));
    }

    update(resource: T): Observable<T | any> {
        const url: string = this._baseUrl;

        return (
            this._http
                // .patch(`${url}/${resource.id}`, resource)
                .patch(`${url}/${resource}`, resource)
                .pipe(map(this.dataToResource.bind(this)))
        );
    }

    /**
     * Attention on HttpParams wich is by default an immutable object.
     * therefore its "append" function recreates a new Object each calling
     * @param pagination
     * @returns
     */
    private getRequestParams(pagination: any): HttpParams {
        if (!pagination) {
            return new HttpParams();
        }
        const filters: { [key: string]: number | string } = {};
        pagination.requestFilters?.forEach((f: any) => {
            filters[f.filterId] = f.filterValue;
        });

        return new HttpParams({ fromObject: filters });
    }

    private dataToResources(jsonData: any): any {
        const resp: any = jsonData.body;
        const datalist: T[] = JSON.parse(JSON.stringify(resp.data?.rows));
        const paginatedResource: any = {
            datalist: [],
            pagination: JSON.parse(JSON.stringify(resp.data)),
        };

        delete paginatedResource.pagination?.rows;

        datalist.forEach((d) => {
            paginatedResource.datalist?.push(d);
        });

        return paginatedResource;
    }

    private dataToResource(jsonData: any): T {
        return jsonData.body.data as T;
    }
}
