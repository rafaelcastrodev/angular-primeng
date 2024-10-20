import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CancelRequestService {
    private cancelSubject = new Subject<void>();

    cancelAll() {
        this.cancelSubject.next();
        this.cancelSubject.complete();
        this.cancelSubject = new Subject<void>();
    }

    get cancel$() {
        return this.cancelSubject.asObservable();
    }
}
