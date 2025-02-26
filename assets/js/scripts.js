// Validación del Formulario de Contacto
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    const nameInput = document.getElementById('name').value.trim();
    const subjectInput = document.getElementById('subject').value.trim();
    const messageInput = document.getElementById('message').value.trim();

    // Obtener elementos de mensajes de error
    const nameError = document.getElementById('nameError');
    const subjectError = document.getElementById('subjectError');
    const messageError = document.getElementById('messageError');
    const formMessage = document.getElementById('formMessage');

    // Expresión regular para solo caracteres alfabéticos y espacios
    const nameRegex = /^[a-zA-Z\s]+$/;

    let formValid = true;

    // Validar el campo de nombre
    if (nameInput === "" || !nameRegex.test(nameInput)) {
        nameError.style.display = 'block';
        formValid = false;
    } else {
        nameError.style.display = 'none';
    }

    // Validar el campo de asunto
    if (subjectInput === "") {
        subjectError.style.display = 'block';
        formValid = false;
    } else {
        subjectError.style.display = 'none';
    }

    // Validar el campo de mensaje
    if (messageInput === "") {
        messageError.style.display = 'block';
        formValid = false;
    } else {
        messageError.style.display = 'none';
    }

    // Si el formulario es válido, mostrar mensaje de éxito
    if (formValid) {
        formMessage.textContent = 'Formulario enviado con éxito.';
        formMessage.style.color = 'green';
    } else {
        formMessage.textContent = 'Por favor, corrija los errores en el formulario.';
        formMessage.style.color = 'red';
    }
});

// Cambio de Color con Selector
document.querySelectorAll('.color-button').forEach(button => {
    button.addEventListener('click', function() {
        const color = this.getAttribute('data-color');
        document.getElementById('colorBox').style.backgroundColor = color;
    });
});

// Calculadora
document.getElementById('sumButton').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultado = document.querySelector('.resultado');

    if (!isNaN(num1) && !isNaN(num2)) {
        resultado.textContent = num1 + num2;
    } else {
        resultado.textContent = 'Error: Por favor ingrese números válidos.';
    }
});

document.getElementById('subtractButton').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultado = document.querySelector('.resultado');

    if (!isNaN(num1) && !isNaN(num2)) {
        const difference = num1 - num2;
        resultado.textContent = difference >= 0 ? difference : 0;
    } else {
        resultado.textContent = 'Error: Por favor ingrese números válidos.';
    }
});