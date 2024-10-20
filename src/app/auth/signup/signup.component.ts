import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**MODELS */
import { authRoutesNames } from '../auth-routes-names';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
    signUpForm: FormGroup;
    isSubmitted!: boolean;
    displayPassword!: boolean;
    authRoutesNames = authRoutesNames;
    private formBuilder: FormBuilder = inject(FormBuilder);

    constructor() {
        this.signUpForm = this.formBuilder.group({
            name: ['', [Validators.required]],
            username: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]],
        });
    }

    get formControls() {
        return this.signUpForm.controls;
    }

    onSubmit() {
        this.isSubmitted = true;

        if (this.signUpForm.invalid) {
            this.isSubmitted = false;
            return;
        }

        const name: string = this.formControls['name'].value;
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
