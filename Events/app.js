
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
const elementoLista = document.querySelector('#Ultimo-elemento');
window.addEventListener('scroll',(e)=>{
    
    //Permite saber a que distancia estoy del elemento
    const ubicacionElemento = elementoLista.getBoundingClientRect();
    console.log(ubicacionElemento);
});

//Evitar propagacion(Bubling)
//Se le de un evento a un elemento de la lista tiene un evento
/* elementoLista.addEventListener('click',e=>{
    e.stopPropagation();
    console.log('clickear un elemento');
})

//Se le de un evento ahora al elemento padre(lista completa)
const eventoLista = document.addEventListener('click',(e)=>{
    //e.stopPropagation();
    console.log(e.target);
}) */

/*Al hacer click en el elemento de la lista se ejecutan ambos eventos
Y no solo un evento, para detener esto se utilizan dos formas con
e.stopPropagation() en ambos eventos*/

//Evitar propagacion segunda forma:

const selectorGeneral = document.querySelector('.general');
selectorGeneral.addEventListener('click',(e)=>{
    if(e.target.classList.contains("Ultimo-elemento")){
        console.log("Elemento 7");
    }else{
        console.log("Lista");
    }
});



//Eventos con imagenes
const selectorImagen = document.querySelector('.imagen');

//Detectar cuando una imagen se carga
selectorImagen.addEventListener('load',()=>{
    console.log('La imagen se carga correctamente');
})






