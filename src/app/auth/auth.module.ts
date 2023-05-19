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
import { FormControlInvalidPipe } from '@app/shared/pipes/form-control-invalid.pipe';

/**COMPONENTS */
import { AuthComponent } from './auth.component';
import { SigninComponent } from './signin/signin.component';

@NgModule({
    declarations: [AuthComponent, SigninComponent],
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
        FormControlInvalidPipe,
        SharedModule,
    ],
})
export class AuthModule {}
