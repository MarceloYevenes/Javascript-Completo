
//Se ejecuta cuando el documento se ha cargado completamente
document.addEventListener('DOMContentLoaded', ()=>{
    console.log('---Documento cargado---');
});

//Detectar que estoy escribiendo en un input
const busqueda = document.querySelector('.busqueda');
busqueda.addEventListener('input',e=>{
    //Permite ver lo que se escribe 'e' es el evento
    console.log(e.target.value);
})

//Detectar el submit de un formulario
const formulario = document.querySelector('.formulario');
//Detecta el submit y le paso una funcion como callback
formulario.addEventListener('submit', validarFormulario)

//Funcion que le paso para detectar el cambio 'e' es el evento
function validarFormulario(e){
    //Detener el evento por defecto de un submit o cualquier evento
    e.preventDefault();
    console.log(e.target.action);
}

//Detectar un click en un objeto
const clickEnlace = document.querySelector('.click-enlace');

clickEnlace.addEventListener('click',(e)=>{
    //Escapo del evento por defecto
    e.preventDefault();

});


//Detecta scroll en la ventana
window.addEventListener('scroll',(e)=>{
    const elementoLista = document.querySelector('#Ultimo-elemento');
    //Permite saber a que distancia estoy del elemento
    const ubicacionElemento = elementoLista.getBoundingClientRect();
    console.log(ubicacionElemento);
});

//Eventos con imagenes
const selectorImagen = document.querySelector('.imagen');






