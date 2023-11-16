// Al hacer click en el botón muestra y oculta las respuestas
// Selecciona los elementos
const mostrarRespuestas= document.getElementById('mostrarRespuestas')
const respuesta1 = document.getElementById('respuesta1');
const respuesta2 = document.getElementById('respuesta2');

// se agrega un evento el botón para identificar el momento en que se hace click
mostrarRespuestas.addEventListener('click', function(e) {
    //se evita que se recargue la página y permite se vean los resultados
      
    // Se verifica si la respuesta 1 está visible o no
    if (respuesta1.style.display === 'none') {
        //se muestran las respuestas
        respuesta1.style.display = 'block';
        respuesta2.style.display = 'block';
        //En el botón se visualiza el texto 
        mostrarRespuestas.textContent = 'Ocultar Respuestas';
    } else {
        // se ocultan las respuestas
        respuesta1.style.display = 'none';
        respuesta2.style.display = 'none';
        // En el botón se visualiza el texto
        mostrarRespuestas.textContent = 'Respuestas';
    }
    
});
//Fin


//Selecciona los radio buttons y el div donde mostrará el texto
const radioButtons = document.querySelectorAll('input[type="radio"]');
const textoMostrado = document.getElementById('textoMostrado');

//funcion donde evalua por el valor del radio button y agrega el texto
function mostrarTexto() {
    radioButtons.forEach(radio => {
        if (radio.checked) {

            if (radio.value === 'planeta') {
                textoMostrado.textContent = 'Incorrecta, no es planeta';
            } else if (radio.value === 'satelite') {
                textoMostrado.textContent = 'Respuesta Correcta';
            } else if (radio.value === 'asteroide') {
                textoMostrado.textContent = 'Incorrecta, no es asteroide'
            }
        }
    });
}
//agrega eñ evemto escucha el click 
radioButtons.forEach(radio => {
    radio.addEventListener('click', mostrarTexto);
});
//Llama a la función
mostrarTexto();
//fin

//Selecciona los radio buttons y el div donde mostrará el texto
const radiosButton = document.querySelectorAll('input[type="radio"]');
const textMostrado = document.getElementById('textMostrado');

//funcion donde evalua por el valor del radio button y agrega el texto
function mostrarText() {
    radioButtons.forEach(radio => {
        if (radio.checked) {

            if (radio.value === 'saturno') {
                textMostrado.textContent = 'Incorrecta, no es saturno';
            } else if (radio.value === 'urano') {
                textMostrado.textContent = 'Incorrecta, no es urano';
            } else if (radio.value === 'jupiter') {
                textMostrado.textContent = 'Respuesta Correcta';
            }
        }
    });
}
//agrega eñ evemto escucha el click 
radioButtons.forEach(radio => {
    radio.addEventListener('click', mostrarText);
});
//Llama a la función
mostrarText();
//Fin

//Reecarga la página
borrarRespuestas = document.getElementById('Reiniciar');
borrarRespuestas.addEventListener('click', function() {
    window.location.reload();
});







  