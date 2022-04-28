'use strict';

const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

const btnEnviar = document.querySelector('#enviar');
const formularioEnviar = document.querySelector('enviar-mail');
const resetBtn = document.querySelector('#resetBtn');

// EventListeners

eventListeners();

function eventListeners() {
    // Inicio de la app
    document.addEventListener('DOMContentLoaded', inicioApp);

    // Campos del formulario
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);


    // Boton de enviar en el submit
    formularioEnviar.addEventListener('submit', enviarEmail);

    // Boton de reset
    resetBtn.addEventListener('click', resetFormulario);
}


// Funciones

function inicioApp() {
    // Deshabilitar el envio
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50')
}

// Valida que el campo tenga algo escrito

function validarFormulario(e) {

    if (e.target.value.lenght > 0) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        e.target.classList.add('border', 'border-red-500');
    }

    // Validar unicamente el email

    if (this.type === 'email') {
        validarEmail(this);
    }

    if (email.value !== '' && asunto.value !== '' && mensaje.value !== '') {
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('opacity-50');
        btnEnviar.classList.remove('cursor-not-allowed');
    }
}

// Resetear el formulario
function resetFormulario(e) {
    formularioEnviar.reset();
    e.preventDefault();
}


// Cuando se envia el correo

function enviarEmail(e) {

    e.preventDefault();

    // Spinner al presionar enviar 

    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';

    // Gif que envia email

    const enviado = document.createElement('p');
    enviado.textContent = 'Mensaje Enviado Correctamente';
    enviado.classList.add('bg');


    // Ocultar Spinner y mostrar gif de enviado 
    setTimeout(() => {
        spinner.style.display = 'none';

        document.querySelector('#loaders').appendChild(enviado);

        setTimeout(() => {
            enviado.remove();
            formularioEnviar.reset();
        }, 5000)
    }, 3000)
}