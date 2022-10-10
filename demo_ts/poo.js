"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudiante = exports.Persona = void 0;
class Persona {
    constructor(ci, nombres, primerApellido, segundoApellido) {
        this.cedulaIdentidad = ci;
        this.nombres = nombres;
        this.primerApellido = primerApellido;
        this.segundoApellido = segundoApellido;
    }
    saludar() {
        console.log(`Hola me llamo ${this.nombres}`);
    }
}
exports.Persona = Persona;
class Estudiante extends Persona {
    constructor(ci, nombres, primerApellido, segundoApellido, carnetUniversitario) {
        super(ci, nombres, primerApellido, segundoApellido);
        this.carnetUniversitario = carnetUniversitario;
    }
    saludar() {
        console.log(`Hola me llamo ${this.nombres} y soy estudiante`);
    }
}
exports.Estudiante = Estudiante;
// let persona: Persona = new Persona('12345', 'Juan', 'Pérez', ''); 
// persona.saludar();
// let estudiante: Estudiante = new Estudiante('12345', 'Ronald', 'Pérez', '', '26-5544'); 
// estudiante.saludar();
