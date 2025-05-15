'use strict';

const msg = document.getElementById('message')

const formulario = document.getElementById('loginForm');

formulario.addEventListener('submit', (event)=> {
    event.preventDefault();
    login () 

}); 

function login() {
    const username = formulario.username.value;
    const password = formulario.password.value;
    let message = ''


    if (username === 'pepa' && password === 'ABC123') {
        msg.classList.add('success')
        message = 'Bienvenida';
        formulario.style.display = 'none';
        } 
        else {
        msg.classList.add('warning')
        message = 'Acceso denegado'
        }

        
        msg.textContent = message; 
    } 



/*
function login (username, password) {
    if (username === 'pepa' && password === 'ABC123') {
            console.log('Bienvenida')
        } 
        else {
            console.log('Acceso denegado')
        }
    } 

login ('pepita', 'perez')

*/
