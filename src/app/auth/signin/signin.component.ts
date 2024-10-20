import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

/**MODELS */
import { appRoutesNames } from '@app/app-routes-names';
import { authRoutesNames } from '../auth-routes-names';
import { CredentialsInterface } from '../shared/models/credentials.interface';

/**SERVICES */
import { AuthService } from '../shared/services/auth.service';
import { LoadingScreen } from '@core/components/loading-screen/services/loading-screen.service';
import { DialogMessage } from '@core/components/dialog-message/services/dialog-message.service';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
    signInForm: FormGroup;
    isSubmitted!: boolean;
    displayPassword!: boolean;
    appRoutesNames = appRoutesNames;
    authRoutesNames = authRoutesNames;

    constructor(
        private _router: Router,
        private _formBuilder: FormBuilder,
        private _authService: AuthService
    ) {
        this.signInForm = this._formBuilder.group({
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
        this.signInUser({ username, password });
    }

    showHidePassword() {
        this.displayPassword = !this.displayPassword;
    }

    private async signInUser(credentials: CredentialsInterface) {
        try {
            LoadingScreen.present();
            await this._authService.signIn(
                credentials.username!,
                credentials.password!
            );
            await this._router.navigate(['/'], { replaceUrl: true });
        } catch (error: any) {
            console.error(error);
            DialogMessage.error(
                'Something unexpected happened!',
                error.error.detail || 'An error occurred on the server.'
            );
        } finally {
            LoadingScreen.dismiss();
            this.isSubmitted = false;
        }
    }
}
