'use strict';

// Variables

const btnEnviar = document.querySelector('#enviar');


// Variables para campos 

const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

eventListeners();

function eventListeners() {

    // Cuando la app arranca

    document.addEventListener('DOMContentLoaded', iniciarApp);

    // Campos del formulario 

    email.addEventListener('blur', validarFormulario);
}


// Funciones


function iniciarApp() {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

// Valida el formulario

function validarFormulario(e) {

    if (e.target.value.length > 0) {
        console.log('si hay algo...');
    } else {
        e.target.classList.add('border', 'border-red-500');
    }
}
