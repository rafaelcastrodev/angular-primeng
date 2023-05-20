import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**MODELS */
import { authRoutesNames } from '../auth-routes-names';
import { MatchValidator } from '@core/form-validators/must-match.validator';

@Component({
    selector: 'app-recover-password',
    templateUrl: './recover-password.component.html',
    styleUrls: ['./recover-password.component.scss'],
})
export class RecoverPasswordComponent {
    recoverForm: FormGroup;
    isSubmitted!: boolean;
    displayPassword!: boolean;
    authRoutesNames = authRoutesNames;
    private formBuilder: FormBuilder = inject(FormBuilder);

    constructor() {
        this.recoverForm = this.formBuilder.group(
            {
                password: ['', [Validators.required, Validators.minLength(8)]],
                confirmPassword: ['', [Validators.required]],
            },
            { validators: [MatchValidator('password', 'confirmPassword')] }
        );
    }

    get formControls() {
        return this.recoverForm.controls;
    }

    get passwordMatchError() {
        return (
            this.recoverForm.getError('mismatch') &&
            this.recoverForm.get('confirmPassword')?.touched
        );
    }

    onSubmit() {
        this.isSubmitted = true;

        if (this.recoverForm.invalid) {
            this.isSubmitted = false;
            return;
        }

        const password: string = this.formControls['password'].value;

        setTimeout(() => {
            this.isSubmitted = false;
        }, 2000);
    }

    showHidePassword() {
        this.displayPassword = !this.displayPassword;
    }
}
