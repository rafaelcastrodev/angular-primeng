import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LoadingScreen {
    private static _loadingDisplaySignal = signal(false);

    get loadingDisplay() {
        return LoadingScreen._loadingDisplaySignal.asReadonly();
    }

    static present() {
        LoadingScreen._loadingDisplaySignal.set(true);
    }

    static dismiss() {
        LoadingScreen._loadingDisplaySignal.set(false);
    }
}
