import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/**GUARDS */
import { CanComponentDeactivate } from '@core/guards/can-deactivate/form-can-deactivate.guard';

/**MODELS */

/**SERVICES */

@Component({
    selector: 'app-users-details',
    templateUrl: './users-details.component.html',
    styleUrl: './users-details.component.scss',
})
export class UsersDetailsComponent implements OnInit, CanComponentDeactivate {
    userId: string | null = null;
    isNewUser: boolean = false;
    hasUnsavedChanges = true; // Track unsaved changes

    constructor(private acRoute: ActivatedRoute) {}

    ngOnInit(): void {
        this.userId = this.acRoute.snapshot.paramMap.get('id');
        if (!this.userId) {
            this.isNewUser = true;
        }
    }

    // Handle Angular navigation change for unsaved changes
    canDeactivate(): boolean {
        if (this.hasUnsavedChanges) {
            return confirm(
                'You have unsaved changes. Do you really want to leave?'
            );
        }
        return true; // Allow navigation if there are no unsaved changes
    }

    // Handle browser window/tab close with @HostListener
    @HostListener('window:beforeunload', ['$event'])
    beforeUnloadEvent($event: any): void {
        if (this.hasUnsavedChanges) {
            $event.returnValue = true;
        }
    }
}
