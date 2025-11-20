//Ejercicio 1
numero = Number(prompt("Dime un numero"));
if(numero>0){
    console.log("El numero es positivo");
}else
    console.log("El numero es negativo");

//Ejercicio 2
edad = Number(prompt("Dime tu edad"));
if(edad>=18){
    console.log("Eres mayor de edad");
}else
    console.log("Eres menor de edad");

//Ejercicio 3
num = Number(prompt("Dime un numero"));
if(num % 2 == 0){
    console.log("El numero es par");
}else
    console.log("El numero es impar");

//Ejercicio 4
nota = Number(prompt("Escribe tu nota"));
if(nota < 5){
    console.log("Reprobado");
}else
    console.log("Aprobado");

//Ejercicio 5
num1 = Number(prompt("Dime un numero"));
num2= Number(prompt("Dime otro numero"));
if(num1>num2){
    console.log("El primer numero es mayor que el segundo");
}else if(num1==num2){
        console.log("Son iguales");
    }else
    console.log("El segundo numero es mayor que el primero");