import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as indexPipes from './_index';

@NgModule({
    declarations: [indexPipes.pipes],
    imports: [CommonModule],
    exports: [indexPipes.pipes],
})
export class PipesModule {}
