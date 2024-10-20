import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import * as components from './_index-components';
import * as primeblocks from './primeblocks/_index-primeblocks';
import { PrimengModule } from './primeng/primeng.module';

import { PipesModule } from '../pipes/pipes.module';
import { AppSakaiLayoutModule } from './sakai/app.layout.module';

@NgModule({
    declarations: [components.components, primeblocks.primeblocks_components],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PrimengModule,
        RouterModule,
        PipesModule,
        AppSakaiLayoutModule,
    ],
    exports: [
        components.components,
        primeblocks.primeblocks_components,
        PrimengModule,
        AppSakaiLayoutModule,
    ],
})
export class ComponentsModule {}
