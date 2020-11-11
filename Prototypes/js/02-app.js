//Herencia en prototype

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


function Persona(nombre, saldo, telefono){
    //Se hereda nombre y saldo de cliente
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
}



//Se heradan todas las funciones de clientes
Persona.prototype = Object.create(Cliente.prototype);
//Se heredan los parametros de constructor
Persona.prototype.constructor = Cliente;

//Todas las propiedades anteriores deben ser antes de la instancia del objeto

//Instanciarlo
const juan = new Persona('Juan', 5000, 10920192);
console.log(juan);
//Se pueden usar las funciones de cliente
console.log(juan.nombreClienteSaldo());


//Solo disponible en persona
Persona.prototype.mostrarTelefono = function(){
    return `El télefono de esta persona es ${this.telefono}`;
}
console.log(juan.mostrarTelefono());