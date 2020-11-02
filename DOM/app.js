//Seleccionar elementos

//Seleccionar una clase
const cuerpo = document.getElementsByClassName('cuerpo')
console.log(cuerpo);

//Seleccionar elemento por su ID
const titulo = document.getElementById('titulo')
console.log(titulo);

console.log("------------------------------------")

//Selector general (clases e ID)

//Para clases

//querySelector = "Retorna el primer elemento que cumpla lo establecido"
const generalCuerpo = document.querySelector('.cuerpo')
console.log(generalCuerpo);

//Para ID
const generalTitulo = document.querySelector('#titulo')
console.log(generalTitulo);

console.log("------------------------------------")

//querySelector = "Retorna todos los elementos que cumpla lo establecido"
const generalCuerpoAll = document.querySelectorAll('.cuerpo')
console.log(generalCuerpoAll); //Muestra un Array con los elementos que pertenecen


//Es posible ir navegando por elementos del DOM con querySelector desde cuerpo a titulo
const navegandoHijos = document.querySelector('.cuerpoPrincipal #titulo')
console.log(navegandoHijos);

console.log("------------------------------------")

//Navegar por los hijos, mediante un vector children
const navegarHijos = document.querySelector('.cuerpoPrincipal');
//Muestra la lista de nodos hijos a los cuales se puede acceder
console.log(navegarHijos.childNodes)
//Muestra el nodo hijo ubicado en la posicion 1(segundo pusto)
console.log(navegarHijos.children[1]);//También es posible navegar por los hijos children[1].children[0] 

console.log("------------------------------------")

//Navegar por el padre o padres de un elemento
const navegarPadre = document.querySelector('#titulo2');
//Muestra los nodos padres
console.log(navegarPadre.parentNode);
//Accede al nodo padre
console.log(navegarPadre.parentElement);//parentElement.querySelector('.algo') para seleccionar elemento

console.log("------------------------------------")

//Cambiar o extraer datos de un atributo

//Extraer el contenido de #titulo2 detectanto el hidden
console.log(navegarPadre.textContent);

//Extraer el contenido de #titulo2 sin detectar el hidden
console.log(navegarPadre.innerText);

//Extraer el HTML de #titulo2
console.log(navegarHijos.innerHTML);

//Extraer el dato del atributo data del #titulo2
console.log(navegarPadre.getAttribute('data'));

//Cambiar el dato de la etiqueta img
const selectorImagen = document.querySelector('img')
console.log(selectorImagen);
//Permite cambiar el atributo src de la imagen
selectorImagen.src="https://cnnespanol.cnn.com/wp-content/uploads/2019/12/mejores-imagenes-del-ancc83o-noticias-2019-galeria10.jpg?quality=100&strip=info&w=320&h=240&crop=1";

console.log("------------------------------------")


//Cambiar el CSS

/*Cambiar el color de fondo los espacios o guiones se cambian 
por ejemplo para backgorund-color queda como backgorundColor en vez
de un espacio o guion el caracter que viene es con mayúscula*/

//Cambia el color de fondo
navegarPadre.style.backgroundColor ='red';

/*Una mejor manera de cambiar el css es cambiando las clases agregando 
o eliminado clases para cambiar el css*/

//Agregar una clase
navegarPadre.classList.add('nueva-clase');
console.log(navegarPadre);

//Eliminar una clase
navegarPadre.classList.remove('nueva-clase');
console.log(navegarPadre);


console.log("------------------------------------")

//Elemento tiene o no clase retorna true o false

//Como saber si un elemento tiene o no una clase
navegarPadre.classList.add('nueva-clase');
const tenerClase = navegarPadre.classList.contains('nueva-clase');
console.log(tenerClase); // Salida: true

console.log("------------------------------------")


//Crear y agregar elemento

//Se crea un elemento de titulo
const nuevoTitulo = document.createElement('h1');
//Se le agrega un contenido 
nuevoTitulo.textContent='Titulo agregado';
//Se agrega el elemento al final(último hijo)
navegarHijos.appendChild(nuevoTitulo);

/*Es posible agregar otros valores como href e insertar un elemento al inicio 
o en la posicion que se desee con insertBefore
insertBefore(enlace-insertar, posicion)
navegarHijos.insertBefore(nuevoTitulo,navegarHijos.childNodes[0]);
con onclick se pude agregar una funcion o un addEventListener('click', ()=>{})*/


//Eliminar elemento 
nuevoTitulo.remove()

//También es posible eliminar como:

/*function limpiarHTML(){
    //Recorre todo el elemento mientras exista un hijo y los remueve desde el primero
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    }
}*/


