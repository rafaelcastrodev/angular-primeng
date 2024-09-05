import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DemoComponent } from './demo.component';

/**MODULES */
import { SharedModule } from '@shared/shared.module';

@NgModule({
    declarations: [DemoComponent],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild([
            {
                path: '',
                component: DemoComponent,
            },
        ]),
    ],
})
export class DemoModule {}
