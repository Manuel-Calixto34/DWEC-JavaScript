window.onload = () => {
    let colores = document.getElementById("Juego1");
    let evento,color;
    color = elegirColor();
    pregunta = document.getElementById("pregunta").innerHTML = "Color a elegir: "+color;
    colores.addEventListener("click",(e)=>{
        evento = e.target.id;
        if(evento == color){
            clickado=true;
            respuesta = document.getElementById("respuesta").innerHTML = "Has acertado";
            color = elegirColor();
            pregunta = document.getElementById("pregunta").innerHTML = "Color a elegir: "+color;
        }else
            respuesta = document.getElementById("respuesta").innerHTML = "Color incorrecto";
    })
}

function elegirColor(){
    let arrayColores = ["Rojo","Azul","Amarillo","Verde"];
    colorRandom = Math.floor(Math.random()*3);
    color = arrayColores[colorRandom];
    return color;
}