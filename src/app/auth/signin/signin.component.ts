import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**MODELS */
import { authRoutesNames } from '../auth-routes-names';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
    signInForm: FormGroup;
    isSubmitted!: boolean;
    displayPassword!: boolean;
    authRoutesNames = authRoutesNames;
    private formBuilder: FormBuilder = inject(FormBuilder);

    constructor() {
        this.signInForm = this.formBuilder.group({
            username: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]],
        });
    }

    get formControls() {
        return this.signInForm.controls;
    }

    onSubmit() {
        this.isSubmitted = true;

        if (this.signInForm.invalid) {
            this.isSubmitted = false;
            return;
        }

        const username: string = this.formControls['username'].value;
        const password: string = this.formControls['password'].value;

        setTimeout(() => {
            this.isSubmitted = false;
        }, 2000);
    }

    showHidePassword() {
        this.displayPassword = !this.displayPassword;
    }
}
