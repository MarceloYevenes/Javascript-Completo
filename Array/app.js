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
const filtrado = paises.filter((pais)=>{
    return pais === 'Chile';
})
//Solo muestra Chile
console.log(filtrado);


//Devuelve si existe al menos un elemento que cumpla la condicion(true o false)
const elementoSome = paises.some((pais)=>{
    pais === 'Chile'
});
//Retorna true porque si existe
console.log(elementoSome);







