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
    
    <p> atividades para fazer </p>
    <ul>
        <li *ngFor="let atv of atividades">
            {{ atv }}
        </li>
    </ul>
    

    `
    
})

export class CursoComponent{

    nomePortal = 'loiane.cursos';
    cursos = ['angular 2', 'java', 'ext js', 'bootstrap','ilustrator'];
    atividades= ['verificar o que é ilustrator', 'fazer um novo layout', 'estudar matematica'];
}
