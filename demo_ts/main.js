"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const poo_1 = require("./poo");
// console.log('Hola SIS257');
/* Esto es un comentario
  de múltiples líneas
*/
// Bolean
let esActivo = true; // Contexto en la función
var esActivo2 = true; // Contexto en todo el archivo
// Number
let entero = 7;
let real = 7.3;
let octal = 0o55;
let binario = 0xfff;
// String
let siglaSis257 = 'SIS257';
let detalleSis257 = 'Desarrollo Aplicaciones Int/Internet II';
// Array
let array = ['uno', 'dos', 'tres'];
let arrayNum = [1, 2, 3, 4];
// Tuple
let tuple = ['Hola', true, 5, 64.6];
// Enum
var Color;
(function (Color) {
    Color["red"] = "Rojo";
    Color["yellow"] = "Amarillo";
    Color["green"] = "Verde";
})(Color || (Color = {}));
;
var Tipo;
(function (Tipo) {
    Tipo[Tipo["red"] = 1] = "red";
    Tipo[Tipo["yellow"] = 2] = "yellow";
    Tipo[Tipo["green"] = 3] = "green";
})(Tipo || (Tipo = {}));
;
let color = Color.red;
//console.log(Color.red, Tipo.red);
// Any
let variable = 5;
variable = '5 h';
variable = true;
// Object
let objeto = { color: 'Rojo', tipo: 'Color', opacidad: 0.5 };
// Estructuras de control
if (entero % 2 == 0)
    console.log('Es par');
else if (entero % 3 == 0)
    console.log('Es impar');
else
    console.log('else');
switch (entero) {
    case 7: console.log();
}
let contador = 0;
while (contador < 5) {
    //console.log(contador);
    contador++;
}
for (let i = 0; i < array.length; i++) {
    console.log('for: ' + array[i]);
}
for (let str in array)
    console.log('for in:' + str);
for (let str of array)
    console.log('for of:' + str);
array.forEach(str => console.log('foreach:' + str));
;
let ubicacion = { x: 5.66, y: 6.78 };
// Funciones
function saludar() {
    console.log('Hola Mundo');
}
saludar();
//console.log(ubicacion);
let persona = new poo_1.Persona('12345', 'Juan', 'Pérez', '');
persona.saludar();
let estudiante = new poo_1.Estudiante('12345', 'Ronald', 'Pérez', '', '26-5544');
estudiante.saludar();
