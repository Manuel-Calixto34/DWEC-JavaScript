window.onload = () => {
    let boton = document.getElementById("circulo");
    let mensaje = document.getElementById("respuesta");
    cambiarColor();
    boton.addEventListener("click",()=>{
        if(boton.style.backgroundColor=="green"){
            mensaje.innerHTML = ("Reflejos rápidos!");
        }else
            mensaje.innerHTML = ("Demasiado pronto");
    })
}

function cambiarColor(){
    let color = document.getElementById("circulo");
    let verde = false;
    setInterval(()=> {
        if(verde)
            color.style.backgroundColor = "grey";
        else{
            color.style.backgroundColor = "green";
        }
        verde = !verde;
    },500);
}