//Constantes matemáticas
console.log("Euler", Math.E);
console.log("Logaritmo natural 2", Math.LN2);
console.log("Logaritmo natural 10", Math.LN10);
console.log("Logaritmo en base 2 de E", Math.LOG2E);
console.log("Logaritmo en base 10 de E", Math.LOG10E);
console.log("PI", Math.PI);
console.log("Raíz cuadrada de 1/2",Math.SQRT1_2);
console.log("Raíz cuadrada de 2",Math.SQRT2);

console.log("------------------------------------")

//Aproximaciones(redondeos)
console.log("Redondeo al mayor mas cercano:", Math.ceil(4.2));
console.log("Redondeo al menor mas cercano:", Math.floor(4.2));
console.log("Redondeo al mas cercano:", Math.round(4.2));

console.log("------------------------------------")

//Raices
console.log("Elevar el numero e a un numero:", Math.exp(2));
console.log("Elevar el numero un numero x a y:", Math.pow(4,2));
console.log("Raiz cuadrada de un numero:", Math.sqrt(4));

console.log("------------------------------------")

//Minimo y maximo
console.log("Minimo de dos numeros:", Math.min(4,3));
console.log("Mayor de dos numeros:", Math.max(4,3));

console.log("------------------------------------")

//Logaritmo
console.log("Logaritmo natural:", Math.log(3));

console.log("------------------------------------")

//Random
console.log("Retorna numero entre 0 y 1(excluido):", Math.random());

//Math.random() * (max - min) + min)
console.log("Retorna numero entre a y b(excluido):", Math.random() * (3 - 1) + 1);
//Math.floor(Math.random() * (max - min)) + min
console.log("Retorna numero(entero) entre a y b(excluido):",Math.floor(Math.random() * (3 - 1)) + 1);

console.log("------------------------------------")

//Valor absoluto
console.log("Valor absoluto:",Math.abs(-5));

console.log("------------------------------------")

//Trigonometria
console.log("Arcocoseno:", Math.acos(-1));
console.log("Arcoseno:", Math.asin(1));
console.log("Arcotangente:", Math.atan(0));
console.log("cosesno:", Math.cos(1));
console.log("seno:", Math.sin(-1));
console.log("tangente:", Math.tan(0));
console.log("Angulo formado por (y,x) respecto OX:", Math.atan2(2,3));

console.log("------------------------------------")

