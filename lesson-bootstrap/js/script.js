'use strict'
const $form = document.getElementById('form');

$form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const name = $form.name.value;
    const message = $form.message.value;
    console.log(name)
    console.log(message)

})