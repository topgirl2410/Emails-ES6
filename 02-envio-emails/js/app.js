'use strict';

// Variables

const btnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail');

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
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);
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

        mostrarError();
    }
}


function mostrarError() {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = 'Todos los campos son obligatorios...';
    mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3',
        'mt-5', 'text-center', 'error');


    const errores = document.querySelectorAll('.error');
    if (errores.length === 0) {

        //formulario.insertBefore(mensajeError, document.querySelector('.mb-10')); (mostrar en la parte de arriba);

        formulario.appendChild(mensajeError);  // Muestra el error en la parte de abajo
    }


}