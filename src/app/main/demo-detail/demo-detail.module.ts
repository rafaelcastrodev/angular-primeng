import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DemoDetailComponent } from './demo-detail.component';

/**MODULES */
import { SharedModule } from '@shared/shared.module';

@NgModule({
    declarations: [DemoDetailComponent],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild([
            {
                path: '',
                component: DemoDetailComponent,
            },
        ]),
    ],
})
export class DemoDetailModule {}
