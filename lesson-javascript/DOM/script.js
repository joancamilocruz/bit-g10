'use strict';
/* DOM 
CRUD (Create, Read, Update, Delete)
Manipulación DOM
--Eventos 
*/

const $primera = window.document.getElementById("primera");
const $p = window.document.createElement('p');

$p.textContent = "Todos tus datos están protegidos.";

$primera.appendChild($p);

const $segunda = window.document.getElementById('segunda');

$segunda.innerHTML = `<button>ENVIAR</button>`;

const $button = window.document.querySelector("button");

$button.addEventListener ("click",()=> {
console.log("El usuario hizo Click en el botón 'Enviar' ")
});

//$p.remove();
//$segunda.remove();





/*
const $root = window.document.getElementById("root");
const $p = window.document.createElement('p');

$p.textContent = "Hola Equipo!"

$p.innerHTML = ` <span> Hola, </span><strong>DEVS!<strong>`; 

$root.appendChild($p);

$p.remove();

$root.innerHTML = `<button>Click Me</button>`;

const $button = window.document.querySelector("button");

$button.addEventListener ("click",()=> {
    console.log("El usuario hizo Click en el botón")
})
*/ 







