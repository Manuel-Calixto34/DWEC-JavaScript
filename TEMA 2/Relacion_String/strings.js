//1. Longitud de un string
let cadena = "JavaScript";
console.log("Longitud de la cadena: "+cadena.length);

//2. Acceso a caracteres
let cadena2 = "Hola mundo";

for(let i = 0;i<=cadena2.length;i++){
    if (i==0){
        console.log(cadena2[0]);
    }
    else if(i==9){
        console.log(cadena2[9]);
    }
    
}

//3. Mayúsculas y minúsculas
let frase = "Programar es divertido";
console.log("En mayúsculas: "+frase.toUpperCase());
console.log("En minúsculas: "+frase.toLowerCase());

//4. Concatenación
let hola = "Hola ";
let mundo = "Mundo";

console.log("Hola "+"Mundo");
console.log(hola.concat(mundo));

//5. Índices de caracteres
let indice = "Hola mundo";
console.log("Primera aparición de o: "+indice.indexOf("o"));
console.log("última aparición de o: "+indice.lastIndexOf("o"));

//6. Subcadenas
let cadena3 = "JavaScript es genial";
console.log(cadena3.substring(0,10));
console.log(cadena3.slice(14,20));

//7. Reemplazo de texto
let frase2 = "El perro corre rápido";
let reemplazo = frase2.replace("perro", "gato");
console.log(reemplazo);

//8. Incluye o empieza con
let texto = "Frontend Developer";

console.log(texto.includes("end"));
console.log(texto.startsWith("Front"));
console.log(texto.endsWith("per"));

//9. Dividir un string
let lista = "rojo,verde,azul,amarillo";

let colores = lista.split(",");

console.log(colores);

//10. Repetir texto
let palabra = "Hola ";
console.log(palabra.repeat(5));

//11. Eliminar espacios
let cad = "   Hola mundo   ";
console.log(cad.trim());

//12. Padding
let num = "7";

console.log(num.padStart(3,"00"));

//13. Contar vocales
function contar_vocales(cadena){
    let vocal = 0;
    if(cadena.includes("a")||cadena.includes("e")||cadena.includes("i")||cadena.includes("o")||cadena.includes("u")){
        vocal++;
    }
    console.log("Numero de vocales total: "+vocal);
}

contar_vocales("JavaScript es genial");

//14. Palíndromo
function esPalindromo(palabra){
    palabra = palabra.toLowerCase();
    let invertida = "";

    for(let i = palabra.length -1; i>=0 ; i--){
        invertida += palabra [i];
    }

    return invertida == palabra;
}

//15. Invertir string
let inverso ="";
for(let i = cadena.length -1; i>=0;i--){
    inverso = inverso+inverso.charAt(i);
}

console.log(inverso);

//16. Capitalizar frase
function capitalizar(cadena){
    let palabras = cadena.split(" ");
    let resultado = "";
    for(let i = 0;i<palabras.length;i++){
        palabras[i] = palabras[i][0].toUpperCase()+palabras[i].slice(1);
        resultado += palabras[i]+" ";
    }
    resultado = palabras.join(" ");
    return resultado;

}

capitalizar("hola mundo");

//17. Ocultar parte de un string
let num_tarjeta = "1234567812345678";
let num_oculto = num_tarjeta.replace("123456781234","************");
console.log(num_oculto);

//18. Contador de palabras
let frase3 = "El lenguaje JavaScript es muy poderoso";
let palabras = 0;
for(let i = 0;i<=frase3.length;i++){
    if(frase3.charAt(i)==" "){
        palabras++;
    }
}
palabras = palabras + 1;

console.log("La frase tiene "+palabras+" palabras");