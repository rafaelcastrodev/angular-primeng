import { Component } from '@angular/core';

/**MODULES */

@Component({
    selector: 'app-loading-screen',
    standalone: true,
    template: `
        <div class="absolute z-1 text-center">
            <img
                class="w-5 border-circle"
                src="./assets/images/undraw_logo.svg"
                alt="Logo"
            />
        </div>
        <span class="loader"></span>
    `,
    styleUrl: './loading-screen.component.scss',
})
export class LoadingScreenComponent {}
