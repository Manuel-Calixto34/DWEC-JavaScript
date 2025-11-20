//Ejercicio 1
let num1 = Number(prompt("Ingrese el primer número"));
let num2 = Number(prompt("Ingrese el segundo número"));

function sumar(num1,num2){
    return num1 + num2;
}

function restar(num1, num2){
    return num1 - num2;
}

function multiplicar(num1,num2){
    return num1 * num2;
}

function dividir(num1, num2){
    return num1 / num2;
}

console.log("El resultado de la suma es: "+sumar(num1,num2));
console.log("El resultado de la resta es: "+restar(num1,num2));
console.log("El resultado de la multiplicación es: "+multiplicar(num1,num2));
console.log("El resultado de la división es: "+dividir(num1,num2));

//Ejercicio 2
let number = Number(prompt("Ingrese un número"));

let mensaje = (number % 2 == 0) ? "Es par" : "Es impar";
console.log(mensaje);

//Ejercicio 3
let a = Number(prompt("Número 1"));
let b = Number(prompt("Número 2"));
let c = Number(prompt("Número 3"));

if(a>b && a>c){
    console.log("El primer número es el mayor");
}else if(b>a && b>c){
    console.log("El segundo número es el mayor");
}else
    console.log("El tercer número es el mayor");

//Ejercicio 4
let num = Number(prompt("Ingrese un número"));
for(let i =0;i<=10;i++){
    console.log(i+" x "+num+" = "+i*num+" ");
    //document.writeln(`${i}*${num}=${num2} <br></br>`)
}

//Ejercicio 5
let N = Number(prompt("Ingrese un número"));
let resultado = 0;
for(let i=0;i<=N;i++){
    resultado += i;
}
console.log("El resultado de la suma es: "+resultado);

//Ejercicio 6
let positivos = 0;
let negativos = 0;

for(let i = 0; i < 5; i++) {
    let num = Number(prompt(`Ingrese el número ${i+1}`));
    // Incrementa positivos o negativos según corresponda
    if(num>0){
        positivos++;
    }else
        negativos++;
}
console.log("Número total de positivos: "+positivos);
console.log("Número total de negativos: "+negativos);

//Ejercicio 7
let num_p = Number(prompt("Ingrese un número"));
// Usa un bucle para verificar si es divisible por algún número menor que él
for(let i = 0; i<=num_p; i++){
    if(num_p % i == 0){
        console.log(num_p + " no es primo");
    }else
        console.log(num_p + " es primo");
}

//Ejercicio 8
let numero = Number(prompt("Ingrese un número"));
let factorial = 1;

for(let i = 1;i<=numero;i++){
    factorial *= i;
}
console.log("El resultado del factorial es: "+factorial);

//Ejercicio 9
let Nu = Number(prompt("Ingrese un número"));
// Usa un bucle y el operador % para imprimir los pares

for(let i = 0;i<=Nu;i++){
    if(i%2==0){
        console.log(i);
    }
}

//Ejercicio 10
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intento;

while(intento !== numeroSecreto) {
    intento = Number(prompt("Adivina el número entre 1 y 10"));
    if(intento>numeroSecreto){
        console.log("El número a adivinar es menor");
    }else if(intento<numeroSecreto){
        console.log("El número a adivinar es mayor");
    }
}
console.log("Acertaste");
