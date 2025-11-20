window.onload = () => {
    let mensaje = document.getElementById("pregunta").innerHTML = "Sigue la secuencia";
    let colores = document.getElementById("Juego1");
    let respuesta = document.getElementById("respuesta");
    let color = parpadearElemento();
    colores.addEventListener("click",(e) =>{
        let evento = e.target.id;
        if(evento == color){
            respuesta.innerHTML = "Correcto, pasamos al siguiente nivel!";
            color = parpadearElemento();
        }else
            respuesta.innerHTML = "Así no";
    })

}

function parpadearElemento(){
    let arrayColores = ["Rojo","Azul","Amarillo","Verde"];
    let colorRandom = Math.floor(Math.random()*3);
    let color = arrayColores[colorRandom];
    let elemento = document.getElementById(color);
    let visible = false;
    for(let i=0;i<=arrayColores.length;i++){
        setInterval(() => {
            if(visible){
                elemento.style.opacity = 0.5;
            }else{
                elemento.style.opacity = 1;
            }
            visible = !visible;
        },1000);
        colorRandom = Math.floor(Math.random()*3);
        color = arrayColores[colorRandom];
        elemento = document.getElementById(color);
    }

    return color;
}