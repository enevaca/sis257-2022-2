export class Persona {
  cedulaIdentidad: string;
  nombres: string;
  primerApellido: string;
  segundoApellido: string;
  constructor(
    ci: string,
    nombres: string,
    primerApellido: string,
    segundoApellido: string
  ) {
    this.cedulaIdentidad = ci;
    this.nombres = nombres;
    this.primerApellido = primerApellido;
    this.segundoApellido = segundoApellido;
  }

  saludar() {
    console.log(`Hola me llamo ${this.nombres}`);
  }
}

export class Estudiante extends Persona {
  carnetUniversitario: string;
  constructor(
    ci: string,
    nombres: string,
    primerApellido: string,
    segundoApellido: string,
    carnetUniversitario: string) {
      super(ci, nombres, primerApellido, segundoApellido);
      this.carnetUniversitario = carnetUniversitario;
    }

  saludar(): void {
    console.log(`Hola me llamo ${this.nombres} y soy estudiante`);
  }
}

// let persona: Persona = new Persona('12345', 'Juan', 'Pérez', ''); 
// persona.saludar();

// let estudiante: Estudiante = new Estudiante('12345', 'Ronald', 'Pérez', '', '26-5544'); 
// estudiante.saludar();
