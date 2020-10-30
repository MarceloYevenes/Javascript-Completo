//Comprobaciones

//Comprobar si un valor es un numero(true o false)
console.log("Es o no numero:",Number.isInteger(10));
//Retorna true o false si el numero es finito
console.log("Es o no finito:",Number.isFinite(4));
//Retorna true o false si es o no NaN 
console.log("Es o no un valor definido:",Number.isNaN(2));

console.log("------------------------------------")


//Conversiones

//Desde un objeto a un entero(numero)
let b = Number('123'); 
console.log(typeof b); //Salida => number

//Desde un objeto a un String(cadena)
let cadenaConvertir = String('123'); 
console.log(typeof cadenaConvertir); //Salida => String

//Convierte un numero de cadena a entero
console.log("String a numerico:",typeof Number.parseInt('33')); //Salida => number

//Convierte un numero de cadena a float
console.log("String a numerico:",typeof Number.parseFloat('33')); //Salida => number

console.log("------------------------------------")


//Codificar y decodificar
const valor ="esto es un valor";
/*La codificacion sirve para mandar un valor a una URL
  y para evitar fallos por espacios o caracteres extraños
  y asi ser interpretado de manera correcta por el navegador y la API
*/
const codificado = encodeURI(valor);
console.log("Codificado:",codificado);

//Decodifica un texto codificado como URL
console.log("Decodifica:",decodeURI(codificado));

//Codifica los componentes de la url
const uri = "https://w3schools.com/my test.asp?name=ståle&car=saab";
const uri_enc = encodeURIComponent(uri);
console.log(uri_enc);

//Decofica los componetes de la URL
const uri_dec = decodeURIComponent(uri_enc);
console.log(uri_dec);

console.log("------------------------------------")


//Convierte una cadena a codigo
const ecuacion = "2*3+4";
console.log(eval(ecuacion)); //Salida => 10

console.log("------------------------------------")


//Escapa y decodifica una cadena

const cadenaAcodificar = "Cadena a codificar";
//Codifica una cadena
const cadenaAcodificar_cdf = escape(cadenaAcodificar);
console.log(cadenaAcodificar_cdf); //Salida => Cadena%20a%20codificar

//Decodifica la cadena
console.log("Decodificada:",unescape(cadenaAcodificar_cdf));








