//Ejercicio 6
dia = Number(prompt("Dime un numero del 1 al 7"));
if(dia<1||dia>7){
    console.log("Numero no valido");
}

switch(dia){
    case 1: console.log("Lunes");
    break;
    case 2: console.log("Martes");
    break;
    case 3: console.log("Miércoles");
    break;
    case 4: console.log("Jueves");
    break;
    case 5: console.log("Viernes");
    break;
    case 6: console.log("Sábado");
    break;
    case 7: console.log("Domingo");
    break;
    default: console.log("Numero incorrecto");
}

//Ejercicio 7
opcion = Number(prompt("Dime un numero del 1 al 3"));
switch(opcion){
    case 1: console.log("Opción A seleccionada");
    break;
    case 2: console.log("Opcion B seleccionada");
    break;
    case 3: console.log("Opcion C seleccionada");
    break;
    default: console.log("Opción no valida");
}

//Ejercicio 8
color = (prompt("Dime un color"));
switch(color){
    case "rojo": console.log("Alto");
    break;
    case "amarillo": console.log("Precaución");
    break;
    case "verde": console.log("Avanza");
    break;
    default: console.log("Color no valido");
}

//Ejercicio 9
fruta = (prompt("Dime una fruta"));
switch(fruta){
    case "Manzana": console.log("Es una manzana roja");
    break;
    case "Plátano": console.log("Es un plátano amarillo");
    break;
    case "Uva": console.log("Es una uva morada");
    break;
    default: console.log("Fruta no reconocida");
}

//Ejercicio 10
nota_escolar = (prompt("Dime tu nota escolar (A, B, C...)"));
switch(nota_escolar){
    case "A": console.log("Excelente");
    break;
    case "B": console.log("Muy bien");
    break;
    case "C": console.log("Bien");
    break;
    case "D": console.log("Suficiente");
    break;
    case "F": console.log("Reprobado");
    break;
    default: console.log("Nota no valida");
}