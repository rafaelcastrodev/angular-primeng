import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
    signInform: FormGroup;
    isSubmitted!: boolean;
    private formBuilder: FormBuilder = inject(FormBuilder);

    constructor() {
        this.signInform = this.formBuilder.group({
            username: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]],
        });
    }

    get formControls() {
        return this.signInform.controls;
    }

    onSubmit() {
        this.isSubmitted = true;

        if (this.signInform.invalid) {
            this.isSubmitted = false;
            return;
        }

        const username: string = this.formControls['username'].value;
        const password: string = this.formControls['password'].value;

        setTimeout(() => {
            this.isSubmitted = false;
        }, 2000);
    }
}
