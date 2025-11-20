//Nivel 1 - Básicos

//1. Número absoluto
function numero_absoluto(num){
    console.log("El valor absoluto de "+num+" es "+Math.abs(num));
}

//2. Redondeo simple
let numero = Number(prompt("Escribe un numero decimal: "));
console.log(Math.round(numero));
console.log(Math.ceil(numero));
console.log(Math.floor(numero));

//3. Potencias y raíces
console.log("5^3 ="+Math.pow(5,3));
console.log("La raíz cuadrada de 81 es: "+Math.sqrt(81));

//4. Valor máximo y mínimo
let array = [10, -5, 3, 99, 42];
console.log("El número más grande es "+Math.max(...array));
console.log("El número más pequeño es "+Math.min(...array));

//Nivel 2 - Aleatoriedad

//5. Número aleatorio entre 0 y 1
console.log("Número aleatorio: "+Math.random());

//6. Dado virtual (1-6)
console.log("Dado: "+Math.floor(Math.random() * (6-1)+1));

//7. Número aleatorio en un rango
function numero_aleatorio(num1,num2){
    console.log(Math.floor(Math.random() * (num2-num1) + num1));
}

let min = Number(prompt("Escribe el mínimo del rango: "));
let max = Number(prompt("Escribe el máximo del rango: "));

numero_aleatorio(min,max);

//8. Seno y coseno
const grados = 45;

const radianes = grados * (Math.PI / 180);


console.log("Seno de 45: "+Math.sin(radianes));
console.log("Coseno de 45: "+Math.cos(radianes));

//9. Tangente y arco tangente

const grado = 60;

const radianes2 = grado * (Math.PI / 180);

console.log("Tangente: "+Math.tan(radianes2));

console.log("Arcotangente: "+Math.atan(radianes2));

//10. Logaritmos
console.log("Logaritmo de 10: "+Math.log(10));

//11. Juego: adivina el número
/*
let aleat = Math.floor(Math.random() * (100-1) + 1);

let num = Number(prompt("Adivina el numero")); 

while(num != aleat){
    if(num>aleat){
        console.log("El numero a adivinar es menor");
        num = Number(prompt("Adivina el numero"));
    }else if(num<aleat){
        console.log("El numero a adivinar es mayor");
        num = Number(prompt("Adivina el numero"));
    }else if(num == aleat){
        console.log("Acertaste");
    }
}
*/
//12. Distancia entre dos puntos
let x1,x2,y1,y2;

x1 = 2;
x2 = 10;
y1 = 7;
y2 = 3;

function distancia(a,b,c,d){
    console.log("La distancia entre dos puntos es: "+Math.sqrt(Math.pow((b-a),2)+Math.pow((d-c),2)));
}

distancia(x1,x2,y1,y2);

//13. Simulación de ruleta
/*
let ruleta = Math.floor(Math.random() * (36-1)+1);

let nu = Number(prompt("Di un numero del 1 al 36"));

while(nu != ruleta){
    console.log("Perdiste todo");
    nu = Number(prompt("Di un numero del 1 al 36"));
    if(nu == ruleta){
        console.log("Tenemos un ganador");
    }
}
*/
//14. Generador de contraseñas simples
let n = Math.floor(Math.random() * (99-10)+10);
let contraseña = "Contra"+n;

console.log("Nueva contraseña aleatoria: "+contraseña);