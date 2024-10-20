import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MAIN_ROUTES } from './main-routing.module';
import { MainComponent } from './main.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
    declarations: [MainComponent],
    imports: [RouterModule, CommonModule, MAIN_ROUTES, SharedModule],
    exports: [MainComponent],
})
export class MainModule {}
