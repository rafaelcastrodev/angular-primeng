import { BaseResourceInterface } from '@core/models/base-resource.interface';

export interface UserInterface extends BaseResourceInterface {
    isLoadingClient?: boolean;
    email?: string;
    must_reset_password?: boolean;
    role_id?: string;
    role?: any;
}
