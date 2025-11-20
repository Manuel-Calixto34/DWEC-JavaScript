//Nivel 1 - Conversión y propiedades básicas
let cad1 = "123";
let cad2 = "3.14";
let cad3 = "abc";

console.log(Number(cad1));
console.log(parseInt(cad1));
console.log(parseFloat(cad1));

//Esta primera cadena se queda igual ya que es un número entero

console.log(Number(cad2));
console.log(parseInt(cad2));
console.log(parseFloat(cad2));

//Esta segunda cadena es un número flotante, por lo que al aplicar parseInt se convierte en entero "3"

console.log(Number(cad3));
console.log(parseInt(cad3));
console.log(parseFloat(cad3));

//Esta tercera cadena son letras, por lo que al intentar convertirlo en entero o flotante sale "NaN" ya que no es un número.

//Función que comprueba si es un número entero
function numero_entero(num)
{
    if(Number.isInteger(num)){
        console.log("true");
    }else
        console.log("false");
}

numero_entero("abc");

// Not a number
console.log(Number.isNaN(NaN)); //true
console.log(Number.isNaN("hello")); //true
console.log(Number.isNaN(undefined)); //false
console.log(Number.isNaN(0/0)); //false
console.log(Number.isNaN(parseInt("abc"))); //false

// Valores infinitos
console.log(Number.isFinite(1/0));

//Nivel 2 - Métodos de instancia
//Número con decimales fijos
let numero = 3.141592;
console.log(numero.toFixed(2));
console.log(numero.toFixed(4));
console.log(numero.toFixed(6));

//Representación exponencial
let n = 123456;
console.log(n.toExponential(2));

//Conversión a string con base
let cadena = 255;
console.log(cadena.toString(2));
console.log(cadena.toString(8));
console.log(cadena.toString(16));

//Precisión controlada
let nu = 123.456789;
console.log(nu.toPrecision(4));
console.log(nu.toPrecision(7));

//Nivel 3: Retos aplicados

//12. Validador de números
function comprobar_cadena(cadena){
    if(isNaN(cadena)){
        console.log(cadena+" no es un número");
    }else if(Number.isInteger(cadena)){
        console.log(cadena+" es un número entero")
    }else if(Number.isInteger(cadena)==false){
        console.log(cadena+" es un número decimal")
    }
}

comprobar_cadena(1234);
