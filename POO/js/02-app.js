class Cliente {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }

  mostrarInformacion() {
    return `Cliente: ${this.nombre}`;
  }

  static bienvenida() {
    return `Bienvenido al cajero`;
  }
}

//Herencia(Hereda los parametros de cliente)
class Empresa extends Cliente {
  constructor(nombre, saldo, telefono, categoria) {
    //Busca los atributos  
    super(nombre, saldo);
    this.telefono = telefono;
    this.categoria = categoria;
  }
  //El metodo se reescribe
  static bienvenida() {
    return `Bienvenido al cajero de empresas`;
  }
}


const juan = new Cliente("Juan", 400);
const empresa = new Empresa("Codigo con juan", 500, 12345678, 'Aprendizaje en linea');
console.log(empresa);
console.log(empresa.mostrarInformacion());

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());
