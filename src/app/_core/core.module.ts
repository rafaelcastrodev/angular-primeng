import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    //PathLocationStrategy,
    HashLocationStrategy,
    LocationStrategy,
} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { MessageService } from 'primeng/api';

/**INTERCEPTORS */
import { TokenInterceptor } from './interceptors/token/token.interceptor';
import { CacheInterceptor } from './interceptors/cache/http-cache.interceptor';
import { ErrorInterceptor } from './interceptors/error/error.interceptor';
import { DialogMessageComponent } from './components/dialog-message/dialog-message.component';
import { CancelRequestInterceptor } from './interceptors/cancel-requests/cancel-requests.interceptor';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LoadingScreenComponent,
        DialogMessageComponent,
    ],
    exports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LoadingScreenComponent,
        DialogMessageComponent,
    ],
    providers: [
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: CancelRequestInterceptor,
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: CacheInterceptor,
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorInterceptor,
            multi: true,
        },
        MessageService,
    ],
})
export class CoreModule {}
