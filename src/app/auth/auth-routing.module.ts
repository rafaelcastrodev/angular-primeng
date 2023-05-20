import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';

/**MODELS */
import { authRoutesNames } from './auth-routes-names';

/**COMPONENTS */
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ValidateOtpComponent } from './validate-otp/validate-otp.component';

const authRoutes: Routes = [
    {
        path: '',
        component: AuthComponent,
        children: [
            {
                path: '',
                redirectTo: authRoutesNames.SIGNIN.url,
                pathMatch: 'full',
            },
            {
                path: authRoutesNames.SIGNIN.url,
                component: SigninComponent,
            },
            {
                path: authRoutesNames.SIGNUP.url,
                component: SignupComponent,
            },
            {
                path: authRoutesNames.RECOVER_PASSWORD.url,
                component: RecoverPasswordComponent,
            },
            {
                path: authRoutesNames.FORGOT_PASSWORD.url,
                component: ForgotPasswordComponent,
            },
            {
                path: authRoutesNames.VALIDATE_OTP.url,
                component: ValidateOtpComponent,
            },
        ],
    },
];

export const AUTH_ROUTES = RouterModule.forChild(authRoutes);
