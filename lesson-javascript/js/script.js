/* 
Comentario
Multilinea
*/

// Comentario de una línea 

// KEYWORDS O palabras reservadas

/* VARIABLES */
/*
nombreVariable1 = 'Automatica'
nombreVariable1 = '1'
console.log(nombreVariable1)

var nombreVariable2 = 'usando "var"'
nombreVariable2 = '2'
console.log(nombreVariable2)

let nombreVariable3 = 'usando "let"'
nombreVariable3 = '3'
console.log(nombreVariable3)

const nombreVariable4 = 'usando "const"'
console.log(nombreVariable4)*/


/* OPERADORES */
// Asignación

/* TIPOS DE DATO PRIMITIVOS */
let miVariable;
miVariable = undefined
// String, cadena de texto
miVariable = '"usando comillas dobles"';
miVariable = 'usando comillas';
miVariable = `usando backtips`
//number
miVariable = 0;
miVariable = -1;
miVariable = 1;
miVariable = 1.5;
miVariable = 0b01;
miVariable = 0o01;
miVariable = 0x01;
//boolean
miVariable = true
miVariable= false
console.log("miVariable:",miVariable) 

/*
Crear 3 constantes
- nombre 
- apellido
- edad 
imprima en la consola, su nombre completo y edad usando los valores de las constantes
Ejm: Soy pepita perez y tengo 24 años
*/

const miNombre = "Joan"
miApellido = 'Cruz'
miEdad = '24 años'
console.log ("Soy",miNombre, miApellido, "y tengo",miEdad)
console.log('soy joan cruz y tengo 24 años')
//concatenar
console.log('soy' + ' ' + miNombre + ' ' + miApellido + ' '+ 'y tengo' + ' ' + miEdad)
//interpolación de variables
console.log (`soy ${miNombre} ${miApellido} y tengo ${miEdad}`)
