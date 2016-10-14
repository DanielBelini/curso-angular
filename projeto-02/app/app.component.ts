import { Component } from '@angular/core';

import { MeuPrimeiroComponent} from './primeiro/meu-primeiro.component';
import { CursoComponent } from './cursos/cursos.component';
@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>Hello World!</p>
        <meu-primeiro-component></meu-primeiro-component>
        <curso-lista></curso-lista>
    `,
    directives: [MeuPrimeiroComponent,CursoComponent]   
})
export class AppComponent { }
