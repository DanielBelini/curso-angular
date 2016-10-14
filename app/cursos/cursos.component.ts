import { Component } from '@angular/core';

@Component({
    selector: 'curso-lista',
    template: `
    <p> cursos {{ nomePortal }}</p>
    <ul>
        <li *ngFor="let curso of cursos">
            {{curso}}
        </li>
    </ul>
    `
    
})

export class CursoComponent{

    nomePortal = 'loiane.cursos';
    cursos = ['angular 2', 'java', 'ext js'];
}
