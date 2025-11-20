//Ejercicio 1
let edad = Number(prompt("Ingrese su edad"));
let permiso = prompt("¿Tiene permiso de sus padres? (sí/no)");
// Usa un condicional con && para determinar si puede entrar

if(edad >= 18 && permiso.toLowerCase() == "sí"){
    console.log("Tienes permiso");
}else
    console.log("No tienes permiso");

//Ejercicio 2
let matematicas = prompt("¿Aprobó matemáticas? (sí/no)");
let fisica = prompt("¿Aprobó física? (sí/no)");
let quimica = prompt("¿Aprobó química? (sí/no)");
// Usa un condicional con || para determinar si pasa al siguiente nivel

if(matematicas == "sí" || fisica == "sí" || quimica == "sí"){
    console.log("Pasa al siguiente nivel");
}else
    console.log("No pasa al siguiente nivel");

//Ejercicio 3
let contraseña_r = "1234";
let contraseña = prompt("Ingrese la contraseña");
// Usa ! para comprobar si no es correcta

if(contraseña != contraseña_r){
    console.log("La contraseña no es correcta");
}else
    console.log("La contraseña es correcta");

//Ejercicio 4
let numero = Number(prompt("Ingrese un número"));
// Usa && para verificar el rango
if(numero>=10 && numero <=50){
    console.log("El número se encuentra en el rango");
}else
    console.log("El número no se encuentra en el rango");

//Ejercicio 5
let edad2 = Number(prompt("Ingrese su edad"));
let tutor = prompt("¿Tiene tutor presente? (sí/no)");
// Usa && y || según corresponda
if(edad2>=18 || edad2<18 && tutor == "sí"){
    console.log("Puedes entrar");
}else
    console.log("No puedes entrar");

//Ejercicio 6
let usuario = prompt("Ingrese su usuario");
let contraseña2 = prompt("Ingrese su contraseña");
// Condicional usando && y ||
if(usuario == "admin" && contraseña2=="1234" || usuario == "invitado"){
    console.log("Acceso válido");
}else
    console.log("Acceso no válido");

//Ejercicio 7
let numero2 = Number(prompt("Ingrese un número"));
// Usa operadores lógicos para evaluar ambas condiciones

if(numero>0 && numero<100){
    console.log("El "+numero2+" es positivo y menor que 100");
}else if(numero2>100){
    console.log("El "+numero2+" es mayor que 100");
}else
    console.log("El "+numero2+" es negativo");

//Ejercicio 8
let dia = prompt("Ingrese un día de la semana");
// Usa || para comparar con lunes, martes, miércoles, jueves, viernes
if(dia=="lunes" || dia == "martes" || dia == "miércoles" || dia == "jueves" || dia == "viernes"){
    console.log("Es un día laborable");
}else
    console.log("No es un día laborable");

//Ejercicio 9
let edad3 = Number(prompt("Ingrese su edad"));
let nacionalidad = prompt("Ingrese su nacionalidad");
// Usa && y >= para verificar la condición
if(edad3 >= 18 && nacionalidad == "Española"){
    console.log("Tiene derecho a votar");
}else
    console.log("No tiene derecho a voto");

//Ejercicio 10
let usuario2, contraseña3;

while (!(usuario2 === "admin" && contraseña3 === "1234")) {
    usuario2 = prompt("Usuario:");
    contraseña3 = prompt("Contraseña:");
    // Mensaje de error si no es correcto
    if(usuario2 != "admin" || contraseña3 != "1234"){
        console.log("Acceso denegado");
    }
}
console.log("¡Acceso permitido!");