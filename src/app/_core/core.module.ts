import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    PathLocationStrategy,
    // HashLocationStrategy,
    LocationStrategy,
} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
    ],
    exports: [BrowserModule, BrowserAnimationsModule, HttpClientModule],
    providers: [
        {
            /* When using PathLocationStrategy, server-side settings are required to redirect to index.html */
            provide: LocationStrategy,
            useClass: PathLocationStrategy,
        },
    ],
})
export class CoreModule {}
