//Las clases en java se transforman en prototypes
//JS es orientado a prototipos

//Forma mas usada para llamar una clase
class Cliente {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }

  //Metodo dentro de una clase
  mostrarInformacion() {
    return `Cliente: ${this.nombre}`;
  }

  //Se llama con el nombre de la clase(no es posible llamarla desde el objeto)
  static bienvenida() {
    return `Bienvenido al cajero`;
  }
}

const juan = new Cliente("Juan", 400);
console.log(juan);
console.log(juan.mostrarInformacion());
console.log(Cliente.bienvenida());

//Otra forma para llamar una clase
const Cliente2 = class {};

const juan2 = new Cliente2();
console.log(juan2);
