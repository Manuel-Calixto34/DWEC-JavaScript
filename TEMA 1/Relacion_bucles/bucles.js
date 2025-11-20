document.write("<h1>Manuel</h1>");

//Ejercicio 1
for(var i=1;i<=10;i++){
    console.log(i);
}

//Ejercicio 2
let suma = 0;
for(var i=1;i<=5;i++){
    suma += i;
}
console.log(suma);

//Ejercicio 3
let num = Number(prompt("Dime un numero del 1 al 10"));

for(var i=1;i<=10;i++){
    console.log(num*i);
}

//Ejercicio 4
let contador = 10;

while(contador>=0){
    console.log(contador);
    contador--;
}

//Ejercicio 5
let sum = 1;
while(sum<=20){
    let num = Number(prompt("Dime un numero"));
    sum += num;
}
console.log(sum);

//Ejercicio 6
let condicion = false;
do{
    let contraseña = prompt("Introduzca su contraseña");
    if(contraseña=="1234"){
        condicion=true;
        console.log("Contraseña correcta");
    }
}while(condicion==false);

//Ejercicio 7
var c = 1;
do{
    console.log(c);
    c++;
}while(c<6);