import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MAIN_ROUTES } from './main-routing.module';
import { MainComponent } from './main.component';

/**MODULES */
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [MainComponent],
  imports: [RouterModule, CommonModule, SharedModule, MAIN_ROUTES],
  exports: [MainComponent],
})
export class MainModule {}
