import { barcelona, londres, paris, roma } from './ciudades.js'
// Obtener elementos del dom
let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subTituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')



// Agregar evento clic a cada enlaces

enlaces.forEach(
    function(enlace){
        enlace.addEventListener('click', function(){
            // Remover activo
            enlaces.forEach(function(enlace){
                enlace.classList.remove('active')
            });
            // Agregar activo al que corresponda
            this.classList.add('active');

            // Traer la informacion del objeto correspondiente a la eleccion
            let contenido = obtenerContenido(this.textContent);

            // Mostrar el contenido del dom
            
            tituloElemento.innerHTML = contenido.titulo;
            subTituloElemento.innerHTML = contenido.subtitulo;
            parrafoElemento.innerHTML = contenido.parrafo;

        })
        
    }
);

// Funcion traer la informacion correcta desde ciudades.js
function obtenerContenido(enlace){
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    };
    return contenido[enlace];
}


