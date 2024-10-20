import { Component, inject } from '@angular/core';

/**SERVICES */
import { PrimeNGConfig } from 'primeng/api';
import { LoadingScreen } from '@core/components/loading-screen/services/loading-screen.service';
import { DialogMessage } from '@core/components/dialog-message/services/dialog-message.service';

@Component({
    selector: 'app-root',
    template: ` @if (loadingScreenSignal.loadingDisplay()) {
            <app-loading-screen />
        }
        @if (dialogMessageSignal.dialogDisplay()) {
            <app-dialog-message />
        }
        <router-outlet />`,
})
export class AppComponent {
    loadingScreenSignal = inject(LoadingScreen);
    dialogMessageSignal = inject(DialogMessage);

    constructor(private _primengConfig: PrimeNGConfig) {
        this.setPrimeNgConfig();
    }

    private setPrimeNgConfig() {
        this._primengConfig.ripple = true;
    }
}
