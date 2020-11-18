//Propiedades privadas

class Cliente {
  
    //Atributo privado
    #nombre;

  constructor(nombre, saldo) {
    this.#nombre = nombre;
    this.saldo = saldo;
  }

  mostrarInformacion() {
    return `Cliente: ${this.#nombre} el saldo es ${this.saldo}`;
  }

  static bienvenida() {
    return `Bienvenido al cajero`;
  }

  setNombre(nombre){
    this.#nombre = nombre;
  }

  getNombre(){
      return this.#nombre;
  }

}

const juan = new Cliente('Juan',200);
console.log(juan.getNombre());
