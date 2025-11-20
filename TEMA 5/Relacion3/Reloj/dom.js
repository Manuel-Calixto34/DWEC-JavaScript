let stop = 0;
let intervalo;
let minutos = 0;
let segundos = 0;

window.onload = () => {
    let contador = document.getElementById("contador");
    let btnStart = document.getElementById("btnStart");
    let btnStop = document.getElementById("btnStop");
    let btnReset = document.getElementById("btnReset");
    btnStart.addEventListener("click",()=>{
        stop = 0;
        if(stop==0){
            intervalo = setInterval(reloj,1000);
        }
    })
    btnStop.addEventListener("click",()=>{
        stop = 1;
        clearInterval(intervalo);
    })
    btnReset.addEventListener("click",()=>{
        minutos = 0;
        segundos = -1;
    })
}

function reloj(){
    let contador = document.getElementById("contador");
    if(segundos>59){
        minutos++;
        segundos = 0;
    }else
        segundos++;
    contador.innerHTML = ("0"+minutos+":"+segundos);
}