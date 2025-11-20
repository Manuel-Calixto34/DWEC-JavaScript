let num_adivinar = Number(prompt("Escribe el número a adivinar"));
let num =  Number(prompt("Escribe el número a adivinar"));

do{
    if(num>num_adivinar){
        alert("El numero a adivinar es menor");
        num =  Number(prompt("Escribe el número a adivinar"));
    }else
        alert("El numero a adivinar es mayor");
        num =  Number(prompt("Escribe el número a adivinar"));
}while(num!=num_adivinar);