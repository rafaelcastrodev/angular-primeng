import { Component } from '@angular/core';

@Component({
    selector: 'mmm-not-found',
    template: `
        <div style="display: grid; place-items:center; ">
            <img
                src="/assets/images/undraw_404.svg"
                style="width: 80%; max-width: 400px;"
            />
            <br /><br />
            <strong>Error 404: Page not found</strong>
        </div>
    `,
})
export class NotFoundComponent {}
