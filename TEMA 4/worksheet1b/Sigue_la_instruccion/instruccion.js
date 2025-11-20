window.onload = () => {
    let letra = mostrarLetra();
    pregunta = document.getElementById("pregunta").innerHTML = ("Presiona la tecla: "+letra);
    let juego = document.getElementById("Juego2");

    juego.addEventListener('keydown',(e)=>{
        if(e.key === letra){
            respuesta = document.getElementById("respuesta").innerHTML = ("Has acertado!");
            letra = mostrarLetra();
            pregunta = document.getElementById("pregunta").innerHTML = ("Presiona la tecla: "+letra);
        }else
            respuesta = document.getElementById("respuesta").innerHTML = ("Esa tecla no es correcta");
    })
}

function mostrarLetra(){
    let arrayKeys = ["a","e","i","o","u"];
    let letraRandom = Math.floor(Math.random()*4);
    letra = arrayKeys[letraRandom];
    return letra;
}