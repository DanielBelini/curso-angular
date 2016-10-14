"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var cursos_service_1 = require('./cursos.service');
var tarefas_service_1 = require('./tarefas.service');
var CursoComponent = (function () {
    function CursoComponent(cursosService, t) {
        this.nomePortal = 'loiane.cursos';
        this.cursos = cursosService.getCursos();
        this.tarefas = t.getTarefas();
    }
    CursoComponent = __decorate([
        core_1.Component({
            selector: 'curso-lista',
            template: "\n    <p> cursos {{ nomePortal }}</p>\n    <ul>\n        <li *ngFor=\"let c of cursos\">\n           {{c}}\n        </li>\n    </ul>\n    <p> tarefas para fazer</p>\n    <ul>\n        <li *ngFor=\"let t of tarefas\">\n           {{t}}\n        </li>\n    </ul>\n    \n    ",
            providers: [cursos_service_1.CursosService, tarefas_service_1.tarefasService]
        }), 
        __metadata('design:paramtypes', [cursos_service_1.CursosService, tarefas_service_1.tarefasService])
    ], CursoComponent);
    return CursoComponent;
}());
exports.CursoComponent = CursoComponent;
//# sourceMappingURL=cursos.component.js.map