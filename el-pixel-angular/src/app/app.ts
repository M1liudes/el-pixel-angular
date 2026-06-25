import { Component } from '@angular/core';
import { Home } from './home/home';

@Component({
    selector: 'app-root',
    imports: [Home],
    template: `
        <main>
            <header class="brand-name">
                <img class="brand-logo" src="/logo.svg" alt="logo" aria-hidden="true" style="width: 200px;" />
            </header>
            <section class="content">
                <app-home />
            </section>
        </main>
    `,
    styleUrls: ['./app.css'],
})
export class App {}
