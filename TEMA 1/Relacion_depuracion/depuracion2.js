/*Ejercicio 1
let numero = 10;
if(numero > 5){
    numero == 20;
}
console.log(numero);
*/

let numero = 10;
if(numero > 5){
    numero = 20;
}
console.log(numero);

//El == solo se utiliza dentro de la condición del if para comparar si son iguales o no, para igualar una variable a un valor se utiliza =.

/*Ejercicio 2
let ciudad = "Madrid";
console.log(Ciudad);
*/

let ciudad = "Madrid";
console.log(ciudad);

//Ha puesto Ciudad en vez de ciudad que es el nombre de la variable que se ha declarado, son diferentes debido a la primera letra.

/*Ejercicio 3
function sumar(a, b) {
  let resultado = a + b;
}
console.log(sumar(2, 3));
*/

function sumar(a, b) {
  return resultado = a + b;
}
console.log(sumar(2, 3));

/*Ejercicio 4
let i = 1;
while (i > 5) {
  console.log(i);
  i++;
}
*/

let i = 1;
while(i < 5){
    console.log(i);
    i++;
}

//Nunca entra en el bucle ya que i nunca era mayor que 5 al principio.

/*
Ejercicio 5
let saludo = "Hola";
let nombre = "Luis";
console.log(saludo + , nombre);
*/ 

let saludo = "Hola";
let nombre = "Luis";
console.log(saludo+", "+nombre);

/*
Ejercicio 6
let dias = ["Lunes", "Martes", "Miércoles"];
console.log(dias[3]);
*/

let dias = ["Lunes", "Martes", "Miércoles"];
console.log(dias[2]);

//Los arrays siempre empiezan en la posición 0, entonces en este caso la última posición sería el 2.

/*
Ejercicio 7
let usuario = { nombre: "Ana", edad: 25 };
console.log(usuario.nombre.toLowerCasee());
*/

let usuario = {nombre: "Ana", edad: 25};
console.log(usuario.nombre.toLowerCase());

//Ha puesto "toLowerCasee" en vez de toLowerCase

/*
Ejercicio 8
let edad = 18;
if (edad = 18) {
  console.log("Tienes 18 años");
}
*/

let edad = 18;
if (edad == 18) {
  console.log("Tienes 18 años");
}

//Se debe usar == en la condición del if para comparar variables y valores.

/*
Ejercicio 9
let numeros = [1, 2, 3, 4, 5];
for (let i = 0; i < numeros.length; i++); {
  console.log(numeros[i]);
}
*/

let numeros = [1, 2, 3, 4, 5];
for (let i = 0; i < numeros.length-1; i++){
  console.log(numeros[i]);
}

/*Ejercicio 10
let palabra = "javascript";
for (let i = 0; i <= palabra.length; i++) {
  console.log(palabra[i]);
}
*/

let palabra = "javascript";
for (let i = 0; i < palabra.length; i++) {
  console.log(palabra[i]);
}