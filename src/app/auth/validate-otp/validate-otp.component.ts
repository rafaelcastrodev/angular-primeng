import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**MODELS */
import { authRoutesNames } from '../auth-routes-names';

@Component({
    selector: 'app-validate-otp',
    templateUrl: './validate-otp.component.html',
    styleUrls: ['./validate-otp.component.scss'],
})
export class ValidateOtpComponent {
    authRoutesNames = authRoutesNames;
    otpForm: FormGroup;
    isSubmitted!: boolean;
    isResending!: boolean;
    resendCounter!: number;
    private readonly resendTimer: number = 5;
    private resendInterval: any = null;
    private formBuilder: FormBuilder = inject(FormBuilder);

    constructor() {
        this.otpForm = this.formBuilder.group({
            otp: [
                '',
                [
                    Validators.required,
                    Validators.pattern(/^[0-9]+$/),
                    Validators.maxLength(6),
                    Validators.minLength(6),
                ],
            ],
        });
    }

    get formControls() {
        return this.otpForm.controls;
    }

    ngOnDestroy() {
        clearInterval(this.resendInterval);
    }

    sendAnotherCode() {
        this.isResending = true;

        setTimeout(() => {
            this.isResending = false;
        }, 2000);

        clearInterval(this.resendInterval);
        this.resendCounter = this.resendTimer;
        this.resendInterval = setInterval(() => {
            this.resendCounter--;
            if (this.resendCounter === 0) {
                clearInterval(this.resendInterval);
            }
        }, 1000);
    }

    onSubmit() {
        this.isSubmitted = true;

        if (this.otpForm.invalid) {
            this.isSubmitted = false;
            return;
        }

        const otp: string = this.formControls['otp'].value;

        setTimeout(() => {
            this.isSubmitted = false;
        }, 2000);
    }
}
