const cadenaTexto = 'Esta es una/cadena de texto';


//Buscar elementos 
//Si se incluye una combinacion en el string de letras(true o false)  
console.log("Si se incluye el ext:",cadenaTexto.includes("ext"));

//Devuelve la posicion en la este un valor buscado
console.log("Posicion del elemento buscado:",cadenaTexto.indexOf('dena'));

//Devuelve la posicion en la este un valor buscado(contando desde atrás hacia adelante)
console.log("Posicion del elemento buscado(contador desde atrás):",cadenaTexto.lastIndexOf('dena'));

//Buscar una expresion regular (retorna -1 si no existe) sino retorna la posicion
console.log(cadenaTexto.search('/')); 

//Buscar y retorna todas las ocurrencias de una expresion regular
console.log(cadenaTexto.match('/'));


console.log("------------------------------------")

//Une dos o mas cadenas
console.log("Union de cadenas:", 'Cadena uno'.concat('Cadena dos', 'Cadena tres'));

console.log("------------------------------------")

//Remplaza caracteres de una cadena replace(cadena1, cadena nueva)
console.log("Reemplaza caracteres:",'Esta es una cadena'.replace('cadena', 'cadena nueva'));
//Salida => Esta es una nueva cadena

//Dividir cadenas
console.log("Devuelve el indice de la posicion:",'Cadena'.charAt(2));
console.log("Devuelve el indice(Unicode) de la posicion:",'Cadena'.charCodeAt(2));
console.log("Extrae un número determinado desde una posicion inicial al final:", 'Cadena'.substr(2));
console.log("Extrae un número determinado desde una posicion inicial al una posicion final:", 'Cadena'.substring(1,3));


console.log("------------------------------------")

//Eliminar espacios de una cadena
console.log("Eliminar espacio al incio del string:", '  Cadena'.trimStart());
console.log("Eliminar espacio al final del string:", 'Cadena  '.trimEnd());
console.log("Eliminar espacio al incio y final del string:", '  Cadena  '.trim());

console.log("------------------------------------")

//Repite una cadena de texto n veces(En una misma linea)
console.log('Cadena n veces'.repeat(3));
//Salida => Cadena n vecesCadena n vecesCadena n veces

console.log("------------------------------------")

//Tamaño[0[C],1[A],2[D],3[E],4[N],5[A]] = 6 
console.log("Muestra el tamaño de la cadena:",'Cadena'.length);

console.log("------------------------------------")

//Dividir una cadena en un array
//Divide la cadena cuando encuentre un espacio
const dividirCadena= 'Palabra1 Palabra2 Palabra3'.split(' ');
console.log(dividirCadena);
//Salida => ['Palabra1','Palabra2','Palabra3']

console.log("------------------------------------")



//Estilos(Deben ser agregados al html para ser visto)

const cadenaEstilos = "Cadena para estilos";

console.log("Cadena solo con mayúscula:", cadenaEstilos.toUpperCase());
console.log("Cadena solo con minúscula:", cadenaEstilos.toLowerCase());

//Permite aumentar tamaño(se debe agregar en html para ver cambios)
console.log("Cadena con fuente grande:", cadenaEstilos.big());
console.log("Cadena parpadeante:", cadenaEstilos.blink());
console.log("Cadena negrita:", cadenaEstilos.bold());
console.log("Cadena teletipo:", cadenaEstilos.fixed());
console.log("Cadena color determinado:", cadenaEstilos.fontcolor('green'));
console.log("Cadena tamaño determinado:", cadenaEstilos.fontsize(2));
console.log("Cadena en cursiva:", cadenaEstilos.italics());
console.log("Cadena como link:", cadenaEstilos.link('https://www.google.com/'));
console.log("Cadena pequeña:", cadenaEstilos.small());
console.log("Cadena con tachadura:", cadenaEstilos.strike());
console.log("Cadena como subindice:", cadenaEstilos.sub());
console.log("Cadena como superindice:", cadenaEstilos.sup());

console.log("------------------------------------")

//Convierte los nuemros a letras en este caso ABC
console.log("Conversor unicode a caracteres",String.fromCharCode(65,66,67));


