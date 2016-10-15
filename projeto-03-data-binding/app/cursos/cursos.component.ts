import { Component } from '@angular/core';

import { CursosService } from './cursos.service';
import { tarefasService } from './tarefas.service';
@Component({
    selector: 'curso-lista',
    template: `
    <p> cursos {{ nomePortal }}</p>
    <ul>
        <li *ngFor="let c of cursos">
           {{c}}
        </li>
    </ul>
    <p> tarefas para fazer</p>
    <ul>
        <li *ngFor="let t of tarefas">
           {{t}}
        </li>
    </ul>
    
    `,
    providers: [CursosService, tarefasService]
    
})

export class CursoComponent{

    nomePortal = 'loiane.cursos';
    cursos;
    tarefas;

    constructor(cursosService: CursosService, t: tarefasService){
        this.cursos = cursosService.getCursos();
        this.tarefas = t.getTarefas();    
    }
}
