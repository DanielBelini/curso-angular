import { Injectable } from '@angular/core';

@Injectable()   
export class tarefasService{

    getTarefas(){
        return ['fazer exercicio', 'estudar trigonometria', 'estudar js'];
    }
}