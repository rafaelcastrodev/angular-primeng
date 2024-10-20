import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AUTH_ROUTES } from './auth-routing.module';

/**MODULES */
import { SharedModule } from '@shared/shared.module';
import { FormsModule } from '@angular/forms';

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
    declarations: [AuthComponent, SigninComponent, SignupComponent, RecoverPasswordComponent, ForgotPasswordComponent, ValidateOtpComponent],
    exports: [],
    imports: [RouterModule, CommonModule, AUTH_ROUTES, ReactiveFormsModule, FormsModule, FormFooterComponent, FormHeaderComponent, SharedModule],
})
export class AuthModule {}
