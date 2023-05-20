import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AUTH_ROUTES } from './auth-routing.module';

/**MODULES */
import { SharedModule } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { PasswordModule } from 'primeng/password';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { FormControlInvalidPipe } from '@shared/pipes/form-control-invalid.pipe';

/**COMPONENTS */
import { AuthComponent } from './auth.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { FormHeaderComponent } from './shared/components/form-header/form-header.component';
import { FormFooterComponent } from './shared/components/form-footer/form-footer.component';
import { ValidateOtpComponent } from './validate-otp/validate-otp.component';

@NgModule({
    declarations: [
        AuthComponent,
        SigninComponent,
        SignupComponent,
        RecoverPasswordComponent,
        ForgotPasswordComponent,
        ValidateOtpComponent,
    ],
    exports: [],
    imports: [
        RouterModule,
        CommonModule,
        AUTH_ROUTES,
        ReactiveFormsModule,
        FormsModule,
        CheckboxModule,
        InputTextModule,
        ButtonModule,
        DividerModule,
        PasswordModule,
        OverlayPanelModule,
        FormFooterComponent,
        FormHeaderComponent,
        FormControlInvalidPipe,
        SharedModule,
    ],
})
export class AuthModule {}
