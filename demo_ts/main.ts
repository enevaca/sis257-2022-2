import { Persona, Estudiante } from './poo'
// console.log('Hola SIS257');
/* Esto es un comentario 
  de múltiples líneas
*/
// Bolean
let esActivo: boolean = true; // Contexto en la función
var esActivo2: boolean = true; // Contexto en todo el archivo

// Number
let entero: number = 7;
let real: number = 7.3;
let octal: number = 0o55;
let binario: number = 0xfff;

// String
let siglaSis257: string = 'SIS257';
let detalleSis257: string = 'Desarrollo Aplicaciones Int/Internet II';

// Array
let array: string[] = ['uno', 'dos', 'tres'];
let arrayNum: number[] = [1, 2, 3, 4];

// Tuple
let tuple = ['Hola', true, 5, 64.6];

// Enum
enum Color { red = 'Rojo', yellow = 'Amarillo', green = 'Verde' };
enum Tipo { red = 1, yellow = 2, green = 3 };
let color: Color = Color.red;
//console.log(Color.red, Tipo.red);

// Any
let variable: any = 5;
variable = '5 h';
variable = true;

// Object
let objeto: Object = { color: 'Rojo', tipo: 'Color', opacidad: 0.5 };

// Estructuras de control
if (entero % 2 == 0) console.log('Es par');
else if (entero % 3 == 0) console.log('Es impar');
else console.log('else');

switch(entero) {
  case 7: console.log();
}

let contador: number = 0;
while(contador < 5) {
  //console.log(contador);
  contador++;
}

for(let i = 0; i < array.length; i++) {
  console.log('for: ' + array[i]);
}

for(let str in array) console.log('for in:' + str);
for(let str of array) console.log('for of:' + str);
array.forEach(str => console.log('foreach:' + str));

// Interfaces
interface Coordenada { x: number, y: number };
let ubicacion: Coordenada = { x: 5.66, y: 6.78 };

// Funciones
function saludar(): void {
  console.log('Hola Mundo');
}
saludar();

//console.log(ubicacion);

let persona: Persona = new Persona('12345', 'Juan', 'Pérez', ''); 
persona.saludar();

let estudiante: Estudiante = new Estudiante('12345', 'Ronald', 'Pérez', '', '26-5544'); 
estudiante.saludar();
