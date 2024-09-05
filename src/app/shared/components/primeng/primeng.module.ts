import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { frequentUsedModules } from '@primeng';

@NgModule({
    declarations: [],
    imports: [CommonModule, FormsModule, frequentUsedModules],
    exports: [frequentUsedModules],
    providers: [],
})
export class PrimengModule {}
