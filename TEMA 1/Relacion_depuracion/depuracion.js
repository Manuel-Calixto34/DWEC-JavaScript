/*Ejercicio 1
let nombre = "Ana
console.log(nombre);
*/

let nombre = "Ana";
console.log(nombre);
//No se han cerrado las comillas

/*Ejercicio 2
console.log(edad);
let edad = 20;
*/

let edad = 20;
console.log(edad);

//Se ha puesto el console.log antes de que se declarara la variable

/*Ejercicio 3
let a = 5;
let b = 10;
if(a = b){
    console.log("a es igual a b");
}
*/

let a = 5;
let b = 10;
if(a==b){
    console.log("a es igual a b");
}

//El operador de comparación es con dos iguales

/*Ejercicio 4
let i = 0;
while (i < 5) {
  console.log(i);
}
*/

let i = 0;
while(i<5){
    console.log(i);
    i++;
}
//Faltaba incrementar la variable en uno cada vez quese repite el bucle

/*Ejercicio 5
function saludar() {
  console.log("Hola " + nombre);
}
saludar();
*/

let nombre2 = "Manolo";
function saludar(){
    console.log("Hola "+nombre2);
}
saludar();

//Faltaba crear la variable nombre

/*Ejercicio 6
let frutas = ["manzana", "banana", "pera"];
console.log(frutas[3]);
*/

let frutas = ["manzana", "banana", "pera"];
console.log(frutas[2]);

//Los arrays empiezan a contar desde 0, por lo que la tercera posición sería 2

/*Ejercicio 7
let persona = { nombre: "Ana", edad: 25 };
console.log(persona.apellido.toUpperCase());
*/

let persona = {nombre: "Ana", apellido: "López", edad: 25};
console.log(persona.apellido.toUpperCase());
//Añado apellido al array de persona

/*Ejercicio 8
let a = 5;
let b = "10";
console.log(a + b);
*/

let c = 5;
let d = "10";
console.log(c + Number(d));

//El problema es que se estaba sumando un valor numérico con una cadena de texto.

/*Ejercicio 9
let nota = 8;
if (nota > 5);
{
  console.log("Aprobado");
}else{
  console.log("Reprobado");
}
*/

let nota = 8;
if (nota > 5){
  console.log("Aprobado");
}else{
  console.log("Reprobado");
}

//El else no funcionaba correctamente ya que el if estaba mal declarado.

/*Ejercicio 10
let numeros = [1, 2, 3 ,4, 5];
for(let i = 0; i<=numeros.length; i++){
  console.log(numeros[i]);
}
*/

let numeros = [1, 2, 3 ,4, 5];
for(let i = 0; i <= numeros.length-1; i++){
  console.log(numeros[i]);
}

//Hay que restarle a la longitud de numeros para que no se salga del array.
//Ya que los arrays siempre empiezan por la posición 0.