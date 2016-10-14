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
var CursoComponent = (function () {
    function CursoComponent() {
        this.nomePortal = 'loiane.cursos';
        this.cursos = ['angular 2', 'java', 'ext js', 'bootstrap'];
    }
    CursoComponent = __decorate([
        core_1.Component({
            selector: 'curso-lista',
            template: "\n    <p> cursos {{ nomePortal }}</p>\n    <ul>\n        <li *ngFor=\"let curso of cursos\">\n            {{curso}}\n        </li>\n    </ul>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], CursoComponent);
    return CursoComponent;
}());
exports.CursoComponent = CursoComponent;
//# sourceMappingURL=cursos.component.js.map