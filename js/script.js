 // Aquí tu código
const element = document.getElementById('agregar');
let lista = document.getElementById('lista');

agregar.addEventListener('click', function() {
    const elemento = prompt('Escribe un elemento');
    const newElement = document.createElement('li');
    newElement.innerText = elemento;
    lista.appendChild(newElement);
})
