import { Injectable } from '@angular/core';

@Injectable()   
export class CursosService {
    
   getCursos(){
       return ['angular', 'java', 'ext js', 'teste'];
   } 
}