//Definicion de prototype


function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

//Creando un prototype para Cliente(sintaxis con function() siempre)
Cliente.prototype.tipoCliente = function(){
    let tipo;
    //Se puede acceder a las instancias del objeto
    if(this.saldo > 10000){
        tipo = 'Gold';
    }else if(this.saldo > 5000){
        tipo = 'Platinum';
    }else{
        tipo = 'Normal';
    }

    return tipo;
} 

Cliente.prototype.nombreClienteSaldo = function(){
    //Se pueden hacer referencias a otros prototype
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`
}

//Para descontar saldo
Cliente.prototype.retiraSaldo = function(retira){
    this.saldo -=retira
}

//Instanciarlo 
const pedro = new Cliente('Pedro', 6000);

//Se usa el prototype - Funcion exclusiva de cliente(tipo de objeto)
console.log(pedro.tipoCliente());
console.log(pedro.nombreClienteSaldo());
//Retira 1000 de saldo
pedro.retiraSaldo(1000)
console.log(pedro);

function Empresa(nombre, saldo, categoria){
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const CCJ = new Empresa('Codigo con Juan', 4000, 'Cursos en Línea');
console.log(CCJ);

