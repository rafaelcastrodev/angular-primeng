import { Injectable } from '@angular/core';
import { lastValueFrom, of } from 'rxjs';

/**MODELS */
import { environment as env } from '@env';
import { API_ENDPOINTS } from '@core/constants/api-endpoints.constants';
import { DialogMessage } from '@core/components/dialog-message/services/dialog-message.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private readonly _baseUrl: string = `${env.URL_API}/${API_ENDPOINTS.AUTH}`;

    constructor() {}

    isAuthenticated() {
        return of(false);
    }

    getCurrentAuthUser() {}

    getToken(): string {
        return '';
    }

    refreshToken() {
        return of({ jwt: '' });
    }

    signIn(username: string, password: string): Promise<any> {
        return lastValueFrom(of(null));
    }

    confirmSignOut() {
        DialogMessage.confirmDialog(
            'info',
            'Leave Application',
            `Are you sure you want to <strong>leave</strong> the application?`,
            'Leave',
            'Stay',
            () => this.signOut()
        );
    }

    signOut() {}
}
