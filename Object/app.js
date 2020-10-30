/**
 * Las propiedades de un objeto son similares a las de un array
 */


//Definicion de un objeto
const autoObjeto = {
    marca:'Nissan',
    modelo:'V16',
    year:'1998',
    color:'Rojo',
    detalles:{
        motor:'250cc',
        volante:'estandar',
        cambios:'6 cambios'
    }
};

//Iterar sobre un objeto
for(let propiedad in autoObjeto){
    console.log(`${propiedad}: ${autoObjeto.propiedad}`);
}
//Salida => atributo : valor del atributo

console.log("------------------------------------")


//Destructurando un objeto
const {marca, modelo, year} = autoObjeto;
console.log(`${marca}-${modelo}-${year}`);

//Destructurando un objeto con datos anidados(objeto detalles -> motor)
const {detalles:{motor}} = autoObjeto;
//Se guarda en la variable del objeto
console.log(motor);

console.log("------------------------------------")

//Agregar - Eliminar elementos

//Agregar
autoObjeto.nuevoAtributo = "nuevoValor";
console.log(autoObjeto);

//Eliminar
delete autoObjeto.nuevoAtributo;
console.log(autoObjeto);

console.log("------------------------------------")

//Union de objetos
const autoObjeto2 = {
    kilometros:'20000', 
    asientos:'5',
    puertas:'4',
    
};

//Primera forma de unir objetos
const unionAssing = Object.assign(autoObjeto, autoObjeto2);
//Une todas las propiedades en un solo objeto
console.log(unionAssing);

//Segunda forma de unir los objetos 
const union = {...autoObjeto, ...autoObjeto2};
//El resultado es el mismo anterior
console.log(union);

//Keys e importantes de un objeto
console.log("Retorna las keys de un objeto:", Object.keys(autoObjeto));
console.log("Retorna los valores de un objeto:", Object.values(autoObjeto));
console.log("Retorna las key y el valor en un array:", Object.entries(autoObjeto));

console.log("------------------------------------")


//Buscar una propiedad dentro de un objeto(true o false)
console.log(autoObjeto.hasOwnProperty('marca'));