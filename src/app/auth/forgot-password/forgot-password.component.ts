import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**MODELS */
import { authRoutesNames } from '../auth-routes-names';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
    forgotForm: FormGroup;
    isSubmitted!: boolean;
    wasRecoverSended!: boolean;
    authRoutesNames = authRoutesNames;
    private formBuilder: FormBuilder = inject(FormBuilder);

    constructor() {
        this.forgotForm = this.formBuilder.group({
            username: ['', [Validators.required, Validators.email]],
        });
    }

    get formControls() {
        return this.forgotForm.controls;
    }

    onSubmit() {
        this.isSubmitted = true;

        if (this.forgotForm.invalid) {
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
