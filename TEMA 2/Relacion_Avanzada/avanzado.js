//1. Generador de contraseñas aleatorias
/*
let numero_aleatorio = Math.floor(Math.random() * (9999-1000)+1000);
let letras = "ABCEFGHIJKLMNÑOPQRSTUVWXYZ"; 
let matricula = "";

for(let i = 0;i<=2;i++){
    matricula = matricula+letras.charAt(Math.floor(Math.random()*(26-1)+1));
}

console.log("Matricula aleatoria: "+matricula+"-"+numero_aleatorio);

//2. Simulador de dados múltiples

function tirada_dados(){
    let dados = Number(prompt("Dime el número de dados"));
    let caras = Number(prompt("Dime el número de caras"));
    let resultado = "";
    let numero = 0;
    let total = 0;
    for(let i = 0;i<dados;i++){
        numero = Math.ceil(Math.random()*(caras-1)+1);
        total = total+numero;
        resultado = resultado+"Tirada "+(i+1)+": "+numero+" ";
    }
    resultado = resultado+" Total de los resultados: "+total;
    return resultado;
}

console.log(tirada_dados());

//3. Generadores de identificadores únicos
function generador_id(){
let cadena = "";
let letra = "ABCEFGHIJKLMNÑOPQRSTUVWXYZ";

for(let i = 0;i<=16;i++){
    cadena = cadena+letra.charAt(Math.random()*(27));
}
return cadena;
}
console.log(generador_id());

//4. Validador de contraseñas
function validador_contraseña(contraseña) {

    let letrasMayus = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    let numeros = "0123456789";
    let simbolos = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";


    let tieneMayus = false;
    let tieneNumero = false;
    let tieneSimbolo = false;

    if (contraseña.length < 8) {
        console.log("La longitud de la contraseña es menor de 8 caracteres");
    }

    for (let i = 0; i < contraseña.length; i++) {
        let cadena = contraseña[i];

        if (letrasMayus.includes(cadena)) {
            tieneMayus = true;
        }
        if (numeros.includes(cadena)) {
            tieneNumero = true;
        }
        if (simbolos.includes(cadena)) {
            tieneSimbolo = true;
        }
    }

    if (!tieneMayus) {
        console.log("La contraseña no tiene letra mayúscula");
    } else if (!tieneNumero) {
        console.log("La contraseña no tiene números");
    } else if (!tieneSimbolo) {
        console.log("La contraseña no tiene símbolos especiales");
    } else {
        console.log("Contraseña válida");
    }
}

validador_contraseña("Prueba423");

//5. Compresor de cadenas con Run-Length Encoding
function compresor(){
    let texto = "aaabbcddd";
    let contador1 = 0;
    let contador2 = 0;
    let contador3 = 0;
    let contador4 = 0;
    let resultado1 = "";
    let resultado2 = "";
    let resultado3 = "";
    let resultado4 = "";
    for(let i = 0; i<=texto.length; i++){
        if(texto[i]==="a"){
            contador1++;
        }else if(texto[i]!="a"){
            resultado1 = "a"+contador1;
        }

        if(texto[i]==="b"){
            contador2++;
        }else if(texto[i]!="b"){
            resultado2 = "b"+contador2;
        }

        if(texto[i]==="c"){
            contador3++;
        }else if(texto[i]!="c"){
            resultado3 = "c"+contador3;
        }

        if(texto[i]==="d"){
            contador4++;
        }else if(texto[i]!="d"){
            resultado4 = "d"+contador4;
        }
    }
    return resultado1+resultado2+resultado3+resultado4;
}

console.log(compresor());

//6. Decodificador de codigo

function decodeRLE(cadena){
    let cadenaDecodificada = "";

    for(let i = 0;i<cadena.length;i+=2){
        cadenaDecodificada += cadena[i].repeat(Number(cadena[i+1]));
    }


    return cadenaDecodificada;
}

console.log(decodeRLE("a4b3c2"));

//7. Juego: adivina con intentos limitados

let intento = 0;

let num = Number(prompt("Di un número del 1 al 100"));

let aleatorio = Math.floor(Math.random()*(100-1)+1);

do{
    if(num>aleatorio){
        console.log("El numero a adivinar es menor");
        num = Number(prompt("Di un número del 1 al 100"));
        intento++;
    }else if(num<aleatorio){
        console.log("El numero a adivinar es mayor");
        num = Number(prompt("Di un número del 1 al 100"));
        intento++;
    }else if(num==aleatorio){
        console.log("Acertaste! El número es: "+num);
    }else if(intento>7){
        console.log("Has gastado todos tus intentos");
    }
}while(num != aleatorio||intento<8);
*/
//8. Generador de tarjetas de créditos falsas
/*
function algoritmo_luhn(tarjeta){
    for(let i = tarjeta.length-1;i>=0;i--){
        if(tarjeta.charAt(i) % 2 == 0){
            resultadopares += parseInt(tarjeta.charAt(i)*2);
            if(resultadopares>10){
                resultadopares += (tarjeta.charAt(i)*2)-9;
                if(resultadopares+resultadoimpares%10 != 0){
                    console.log("No es divisible entre 10");
                }else
                    console.log(resultado_final);
            }
        }else
            resultadoimpares += tarjeta.charAt(i);
    }

}

algoritmo_luhn(Number(4556737586899855));
*/

function algoritmo_luhn(tarjeta) {

    let suma = 0;
    let debeDuplicar = false;

    for (let i = tarjeta.length - 1; i >= 0; i--) {
        let digito = parseInt(tarjeta[i]);

         if (debeDuplicar) {
            digito *= 2;
            if (digito > 9) {
                digito -= 9;
            }
        }

        suma += digito;
    }

    if (suma % 10 === 0) {
        console.log("Número de tarjeta válido ");
    } else {
        console.log("Número de tarjeta inválido");
    }
}


algoritmo_luhn(4556737586899855); 

//9. Analizador de dataset en texto

let texto = "10 20 30 40 50 60";

let array = texto.split(" ");
let longitud = array.length;
let suma = 0;
let promedio = 0;
let mediana = 0;
for(i in array){
    suma += parseInt(array[i]);
}
promedio = suma/6;
let mediana1 = array[(array.length/2)-1];
let mediana2 = array[array.length/2];
mediana = ((30+40)/2);
console.log("El promedio es de: "+promedio);
console.log("La mediana es: "+mediana);

function calcularDesviacion(numeros) {
    let promedio = numeros.reduce((a, b) => a + b, 0) / numeros.length;
    let sumaCuadrados = 0;

    for (let i = 0; i < numeros.length; i++) {
        sumaCuadrados += Math.pow(numeros[i] - promedio, 2);
    }

    return "La desviación típica es: "+Math.sqrt(sumaCuadrados / numeros.length);
}

console.log(calcularDesviacion(array));

//10. Juego de ahorcado simple

let palabra = "javascript";
let contador = 10;
let ahorcado = "";
while(contador > 0){
  for(let i = 0; i < palabra.length; i++){
      let adivinar = prompt("Dime una letra").charAt(0);
      if(palabra.includes(adivinar)){
        ahorcado +=  adivinar + " ";
        contador --;
      }
      else{
        ahorcado += " _ ";
        contador --;
      }
  };
};
console.log(ahorcado);