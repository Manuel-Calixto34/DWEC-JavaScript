let intervalo;
let minutos = 0;
let segundos = 0;

let primeraCarta = null;
let segundaCarta = null;

window.onload = () => {
    let contador = 0;
    let cartas = ["charizard","charizard","dragonite","dragonite","gengar","gengar","greninja","greninja","greninja","lucario","lucario"];
    let numRandom = Math.floor(Math.random()*10);
    let carta = document.getElementById("cartas");
    carta.addEventListener("click",(e)=>{
        if(e.target.tagName == "IMG"){
            if (!intervalo) {
            intervalo = setInterval(reloj, 1000);
            }
            numRandom = Math.floor(Math.random()*5);
            carta = e.target;
            carta.src="img/"+cartas[numRandom]+".png";
            if(!primeraCarta){
            primeraCarta = {elemento: e.target,nombre: cartas[numRandom]};
            }else
            segundaCarta = {elemento: e.target,nombre: cartas[numRandom]};
            comprobarPareja();
        }
    })
}

function comprobarPareja(){
    if(primeraCarta.nombre == segundaCarta.nombre){
        clearInterval(intervalo);
        document.getElementById("contador").innerHTML = "Encontraste la pareja!";
    }else
        document.getElementById("contador").innerHTML = "No son pareja";
        setTimeout(() => {
            primeraCarta.elemento.src = "img/reves.png";
            segundaCarta.elemento.src = "img/reves.png";

            primeraCarta = null;
            segundaCarta = null;
        }, 800);
}

function reloj(){
    let contador = document.getElementById("contador");
    if(segundos>59){
        minutos++;
        segundos = 0;
    }else
        if(minutos==1){
        contador.innerHTML = "Se acabó el tiempo";
        }else
            segundos++;
            contador.innerHTML = ("0"+minutos+":"+segundos);
}