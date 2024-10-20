import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

/**GUARDS */
import { CanComponentDeactivate } from '@core/guards/can-deactivate/form-can-deactivate.guard';

/**MODELS */
import { appRoutesNames } from '@app/app-routes-names';
import { mainRoutesNames } from '@main/main-routes-names';
import { UserInterface } from '../shared/models/user.interface';
import { Subscription } from 'rxjs';

/**SERVICES */
import { UsersAPIService } from '../shared/services/users-api.service';
import { UtilsService } from '@shared/services/utils.service';
import { DialogMessage } from '@core/components/dialog-message/services/dialog-message.service';

@Component({
    selector: 'app-users-details',
    templateUrl: './users-details.component.html',
    styleUrl: './users-details.component.scss',
})
export class UsersDetailsComponent implements OnInit, CanComponentDeactivate {
    mainRoutesNames = mainRoutesNames;
    roles = [
        { id: '1', name: 'Admin' },
        { id: '2', name: 'Manager' },
    ];
    routeParameterId: string | null = null;
    hasUnsavedChanges = false;
    itemDetailsForm!: FormGroup;
    isSubmitted!: boolean;
    private _formChangesSubscription$!: Subscription;

    constructor(
        private _router: Router,
        private _acRoute: ActivatedRoute,
        private _formBuilder: FormBuilder,
        private _location: Location,
        private _usersAPIService: UsersAPIService
    ) {}

    get formControls() {
        return this.itemDetailsForm.controls;
    }

    ngOnInit(): void {
        this.initForm();
        this.routeParameterId = this._acRoute.snapshot.paramMap.get('id');
        this.getResources();
    }

    ngOnDestroy() {
        this._formChangesSubscription$.unsubscribe();
    }

    // Handle Angular navigation change for unsaved changes
    canDeactivate(): boolean {
        if (this.hasUnsavedChanges) {
            return confirm(
                'You have unsaved changes. Are you sure you want to exit?'
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

    async navigateBack() {
        await this._router.navigate([
            `${appRoutesNames.MAIN.url}/${mainRoutesNames.USERS.url}`,
        ]);
    }

    onSubmit() {
        this.isSubmitted = true;

        if (this.itemDetailsForm.invalid) {
            this.isSubmitted = false;
            return;
        }
        const newUser: UserInterface = this.clearFormDataObject(
            this.itemDetailsForm.getRawValue()
        );
        this.createOrUpdateItem(newUser);
    }

    private async createOrUpdateItem(newUser: UserInterface) {
        try {
            // const user: UserInterface = await this._usersAPIService.createOrUpdate(newUser);
            const user = this.getNewMockUser(newUser);
            this.fillForm(user);
            if (!this.routeParameterId) {
                this._location.replaceState(
                    `/${appRoutesNames.MAIN.url}/${mainRoutesNames.USERS.url}/${user.id}`
                );
            }
            this.hasUnsavedChanges = false;
            DialogMessage.success(
                'User Registration',
                'User registered successfully!'
            );
            this.isSubmitted = false;
        } catch (error) {
            console.error(error);
        } finally {
            this.isSubmitted = false;
        }
    }

    private clearFormDataObject(user: UserInterface): UserInterface {
        const newUser = UtilsService.cloneObject(user);

        if (!user.id) {
            delete newUser.id;
        }
        return newUser;
    }

    private async getResources() {
        try {
            if (this.routeParameterId) {
                // const user: UserInterface = await this._usersAPIService.getById(this.routeParameterId);
                const user: UserInterface = this.getMockUser();
                this.fillForm(user, false);
            } else {
                this.formControls['password'].setValidators([
                    Validators.minLength(3),
                    Validators.required,
                ]);
                this.itemDetailsForm.updateValueAndValidity();
            }
        } catch (error) {
            console.error(error);
        }
    }

    private fillForm(data: any, omitValueChanges?: boolean) {
        this.itemDetailsForm.patchValue(data, { emitEvent: omitValueChanges });
    }

    private initForm() {
        this.itemDetailsForm = this._formBuilder.group({
            id: [''],
            name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            password: [''],
            role_id: ['', [Validators.required]],
            must_reset_password: [false, [Validators.required]],
        });

        this._formChangesSubscription$ =
            this.itemDetailsForm.valueChanges.subscribe(
                (f) => (this.hasUnsavedChanges = true)
            );
    }

    private getMockUser(): UserInterface {
        return {
            id: 'uuid',
            name: 'Demo 1',
            email: 'demo1@email.com',
            must_reset_password: false,
            role_id: '1',
            role: { id: '1', name: 'Admin' },
        };
    }

    private getNewMockUser(user: UserInterface): UserInterface {
        return {
            id: 'uuid-new',
            name: user.name,
            email: user.email,
            must_reset_password: user.must_reset_password,
            role_id: user.role_id,
        };
    }
}
