/*
Comentario
Multi-línea
*/

// Comentario de una línea

// KEYWORDS o palabras reservadas

/* VARIABLES */
/*
nombreVariable1 = 'automática';
nombreVariable1 = '1';
console.log(nombreVariable1);

var nombreVariable2 = 'usando "var"';
nombreVariable2 = '2';
console.log(nombreVariable2);

let nombreVariable3 = "usando 'let'";
nombreVariable3 = '3';
console.log(nombreVariable3);

const nombreVariable4 = 'usando "const"';
console.log(nombreVariable4);
*/

// Interpolación de variables

/* TIPOS DE DATO PRIMITIVOS */
// undefined
let miVariable;
miVariable = undefined;
// string
miVariable = "'usando comillas dobles'";
miVariable = 'usando comillas sencillas';
miVariable = `usando backtips`;
// number
miVariable = 0;
miVariable = -1;
miVariable = 1;
miVariable = 1.5;
miVariable = 0b01;
miVariable = 0o01;
miVariable = 0x01;
// boolean
miVariable = true;
miVariable = false;

/*
Crear 3 constantes
- nombre
- apellido
- edad
imprima en la consola su nombre completo y edad usando los valores de las constantes
Ej de salida: Soy Pepita Pérez y tengo 32 años.

const nombre = 'Pepita';
const apellido = 'Pérez';
const edad = 32;
console.log('Soy Pepita Pérez y tengo 32 años.');
console.log('Soy', nombre, apellido, 'y tengo', edad, 'años.');
console.log('Soy ' + nombre + ' ' + apellido + ' y tengo ' + edad + ' años.');
console.log(`Soy ${nombre} ${apellido} y tengo ${edad} años.`);
*/

/* OPERADORES */
// Asignación

let resultado = 'Hola';
let miVariable1 = 'Pepita';
let miVariable2 = 'Pérez';

resultado += miVariable1; 

miVariable1 = 10;
miVariable2 = 5;
resultado = 0;


// Concatenación
const nombreCompleto = miVariable1 + miVariable2;
// console.log('nombreCompleto:', nombreCompleto);
miVariable2 = 5;
// Aritméticos
miVariable1 = 10;
resultado = miVariable1 + miVariable2;
resultado = miVariable1 - miVariable2;
resultado = miVariable1 * miVariable2;
resultado = miVariable1 / miVariable2;
resultado = miVariable1 % miVariable2;
resultado = miVariable1 ** miVariable2;

/*
- Cree dos variables de tipo constante y asigne los valores 20 y 3 respectivamente
- Cree una constante para guardar el resultado de cada una de las operaciones básicas (suma, resta, multiplicación y división)
- Imprima el resultado de cada operación con el siguiente formato de ejemplo:
20 + 3 = 23
const num1 = 10;
const num2 = 5;

const sumResult = num1 + num2;
const subResult = num1 - num2;
const mulResult = num1 * num2;
const divResult = num1 / num2;

const result = `
${num1} + ${num2} = ${sumResult}
${num1} - ${num2} = ${subResult}
${num1} x ${num2} = ${mulResult}
${num1} / ${num2} = ${divResult}
`;

console.log(result);
*/

// Precedencia de operadores Ej: 12 / 3 + 2 * 3 - 1
// PEMDAS | Paréntesis Exponentes Multiplicación División Adición Sustracción
/* resultado = 12 / 3 + 2 * 3 - 1;
console.log('resultado:', resultado); */

// Comparasión
miVariable1 = 'hola';
miVariable2 = 'Hola';
miVariable1 = true;
miVariable2 = false;
miVariable1 = '10';
miVariable2 = 10;
miVariable1 = 20;
miVariable2 = '20';
resultado = miVariable1 == miVariable2;
resultado = miVariable1 === miVariable2;
resultado = miVariable1 != miVariable2;
resultado = miVariable1 !== miVariable2;
resultado = miVariable1 > miVariable2;
resultado = miVariable1 >= miVariable2;
resultado = miVariable1 < miVariable2;
resultado = miVariable1 <= miVariable2;

/*
- Leer 2 números y utilizar los operadores de comparasión
- Imprimir en consola el resultado de cada comparasión con el siguiente formato
Ej: 10 no es igual a 5
*/

//Logicos

miVariable1 = 10;
miVariable2 = 5; 

resultado = miVariable1 > miVariable2 && miVariable1 > 1;
resultado = miVariable1 > miVariable2 && miVariable1 > 100; 
resultado = miVariable1 > 100 &&  miVariable1 >miVariable2; 

resultado = miVariable1 > miVariable2 || miVariable1 > 1;
resultado = miVariable1 > miVariable2 || miVariable1 > 100; 

resultado = !true
resultado = !false

console.log('miVariable1:', miVariable1);
console.log('miVariable2:', miVariable2);
console.log('resultado:', resultado);



