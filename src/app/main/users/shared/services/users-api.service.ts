import { Injectable } from '@angular/core';

/**MODELS */
import { UserInterface } from '../models/user.interface';
import { BaseResourcePromiseService } from '@core/services/base-resource-promise.service';
import { API_ENDPOINTS } from '@core/constants/api-endpoints.constants';

import { PaginatedResourceInterface } from '@core/models/paginated-resource.interface';

@Injectable({
    providedIn: 'root',
})
export class UsersAPIService extends BaseResourcePromiseService<UserInterface> {
    constructor() {
        super(API_ENDPOINTS.USERS);
    }

    override getAll(pagination?: PaginatedResourceInterface) {
        const pag: PaginatedResourceInterface = pagination ? pagination : { sortby: 'name', page: 0, page_size: 10 };

        return super.getAll(pag);
    }
}
