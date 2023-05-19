import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**MODELS */
import { authRoutesNames } from '../auth-routes-names';

@Component({
    selector: 'app-recover-password',
    templateUrl: './recover-password.component.html',
    styleUrls: ['./recover-password.component.scss'],
})
export class RecoverPasswordComponent {
    recoverForm: FormGroup;
    isSubmitted!: boolean;
    wasRecoverSended!: boolean;
    authRoutesNames = authRoutesNames;
    private formBuilder: FormBuilder = inject(FormBuilder);

    constructor() {
        this.recoverForm = this.formBuilder.group({
            username: ['', [Validators.required, Validators.email]],
        });
    }

    get formControls() {
        return this.recoverForm.controls;
    }

    onSubmit() {
        this.isSubmitted = true;

        if (this.recoverForm.invalid) {
            this.isSubmitted = false;
            return;
        }

        const username: string = this.formControls['username'].value;

        setTimeout(() => {
            this.isSubmitted = false;
            this.wasRecoverSended = true;
        }, 2000);
    }
}
