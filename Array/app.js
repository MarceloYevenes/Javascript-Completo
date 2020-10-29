//Crear un array
const paises = ['Chile', 'Peru', 'Argentina', 'Mexico'];

//Permite recorrer el array y hacer algo con los elementos
paises.forEach((pais)=>{
    console.log(pais);
})


//Permite generar un nuevo arreglo haciendo algo con los elementos
const nuevoArreglo = paises.map((pais)=>{
    return `${pais} es un pais`;
})

//Imprime el nuevo arreglo con lo modificado en el map
nuevoArreglo.forEach((nuevo)=>{
    console.log(nuevo);
})


//Buscar un elemento dentro de un array(true o false)
const buscarPais1 = paises.includes('Chile');
console.log(buscarPais1);

const buscarPais2 = paises.includes('Colombia');
console.log(buscarPais2);


//Destructurar un array(extraer elementos y llamarlos como la misma variable)
const [primero,segundo,tercero] = paises;
//Extrae los los tres primeros datos y los guarda en esa variable
console.log(primero,segundo,tercero);


//Encontrar el indice de un elemento en un array
const indice = paises.findIndex((variable)=> variable==='Argentina')

//Imprime el indice en donde se encuentra el archivo sino retorna un -1
console.log(indice);

//Filtra un array y retorna un array con elementos que cumplan la condicion
//Importante se puede concatenar los filter filter(funcion).filter(funcion2) etc
const filtrado = paises.filter((pais)=>{
    return pais === 'Chile';
})
//Solo muestra Chile sino encuentra nada array vacio
console.log(filtrado);


//Devuelve si existe al menos un elemento que cumpla la condicion(true o false)
const elementoSome = paises.some((pais)=>{
    pais === 'Chile'
});
//Retorna true porque si existe
console.log(elementoSome);


//Retorna el primer elemento que cumpla cierta condicion
const paisCondicion = paises.find(pais => pais === 'Chile');

//Retorna el elemento Chile sino undefine
console.log(paisCondicion);

//Evalua una condicion en todos los elementos
//Retorna true si todos los elementos la cumplen sino false
const paisEvery = paises.every((pais)=> pais==='Chile');
console.log(paisEvery);


//Concatenar dos array
const numeros1 = ['uno','dos','tres'];
const numeros2 = ['cuatro','cinco','seis'];

//2 formas de concatenar - se pueden hacer con n arrays
console.log([...numeros1,...numeros2]);
//Se puede hacer con n arrays separando con una coma concat(numeros1, numeros2, numeros3)
console.log(numeros1.concat(numeros2));


//Muestra el tamaño de un array en este caso 4(0,1,2,3)
console.log(paises.length);

//Agregar, eliminar elementos
let elementoArray = ['primero','segundo', 'tercero', 'cuarto'];

//Agregar un elemento al incio del array
elementoArray.unshift('Ante-primero');
console.log(elementoArray);

//Agregar un elemento al final del array
elementoArray.push('quinto');
console.log(elementoArray);

//Eliminar un elemento al incio del array
elementoArray.shift('quinto');
console.log(elementoArray);

//Eliminar un elemento al final del array
elementoArray.pop('quinto');
console.log(elementoArray);


//Poner lo elementos en una cadena separandolos por un delimitador 

//Saldra primero,segundo,tercero,cuarto
console.log(elementoArray.join());

//Saldra primero-segundo-tercero-cuarto
console.log(elementoArray.join('-'));


//Cambiar el orden de los elementos de un array(cuarto, tercero, segundo, primero)
console.log(elementoArray.reverse());


//Devolver los elementos seleccionados de inicio - fin 
console.log(elementoArray.slice(0-4));











