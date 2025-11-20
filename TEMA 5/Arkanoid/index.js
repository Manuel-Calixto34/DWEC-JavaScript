var miBola;
var velocidadY = 3;
var velocidadX = 3;
var posicionYBola = 200;
var posicionXBola = 300;
var posicionXBarra = 220;

window.onload = () => {
    miBola = document.getElementById("bola");
    var miBarra = document.getElementById("barra");
    let btnIniciar = document.getElementById("iniciarPartida");
    let btnRenicio = document.getElementById("reiniciarPartida");
    let respuesta = document.getElementById("respuesta");
    btnIniciar.addEventListener("click",()=>{
        animaJuego();
        respuesta.innerHTML = "";
    })

    btnRenicio.addEventListener("click",()=>{
        animaJuego();
        respuesta.innerHTML = "";
    })
    document.addEventListener("keydown",(e)=>{
        if(e.key == "ArrowRight" && posicionXBarra<=500){
            posicionXBarra += 10;
            miBarra.style.left = posicionXBarra+"px";
        }else if(e.key == "ArrowLeft" && posicionXBarra>0){
            posicionXBarra += -10;
            miBarra.style.left = posicionXBarra+"px";
        }
    })
    
}

function animaJuego(){
    var miIntervalo;
    let contador = 0;
    var miBola = document.getElementById("bola");
    let respuesta = document.getElementById("respuesta");
    miIntervalo = setInterval(()=>{
        let barras = document.querySelectorAll(".enemigos");
        posicionYBola += velocidadY;
        miBola.style.top = posicionYBola+"px"; 

        posicionXBola += velocidadX;
        miBola.style.left = posicionXBola+"px";
        
        for(let barra of barras){
            let rectBarra = barra.getBoundingClientRect();
            let rectBola = miBola.getBoundingClientRect();

            if(rectBola.left < rectBarra.right &&
            rectBola.right > rectBarra.left &&
            rectBola.top < rectBarra.bottom &&
            rectBola.bottom > rectBarra.top){
                barra.remove();
                velocidadY*=-1;
            }
        }
        
        if(posicionYBola >= 500){
            clearInterval(miIntervalo);
            respuesta.innerHTML = "Game over >:(";
        }else if(posicionYBola<=0){
            velocidadY*=-1;
        }

        if(posicionXBola <= 0 || posicionXBola >= 580){
            velocidadX *= -1;
        }

        if(posicionYBola >= 400 && posicionYBola<=415 && posicionXBola>=posicionXBarra-50 && posicionXBola <= (posicionXBarra+80)){
            velocidadY *= -1;
        }

    },15);
}
    
