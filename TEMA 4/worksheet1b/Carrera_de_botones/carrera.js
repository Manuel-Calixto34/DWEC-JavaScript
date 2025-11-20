window.onload = () => {
    let boton = document.getElementById("boton");
    let barra = document.getElementById("miBarra");
    let respuesta = document.getElementById("respuesta");

    boton.addEventListener("click",(e) =>{
        if(barra.value < 100){
            aumentarProgreso();
        }else
            respuesta.innerHTML = "Lo conseguiste!"
    })
}

function aumentarProgreso(){
    let progreso = document.getElementById("miBarra");
    progreso.value += 10;
}