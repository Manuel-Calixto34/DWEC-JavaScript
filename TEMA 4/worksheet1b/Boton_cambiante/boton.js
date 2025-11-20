window.onload = () =>{
    let boton = document.getElementById("boton");
    let colorOriginal = boton.style.backgroundColor;
    boton.addEventListener("click",(e)=>{
        boton.innerHTML = "¡Me hiciste clic!";
    })

    boton.addEventListener("mouseover",(e)=>{
       colorOriginal = boton.style.backgroundColor = "red";
       boton.innerHTML = "Ahora soy rojo";
    })

    boton.addEventListener("mouseout",(e) =>{
        colorOriginal = boton.style.backgroundColor = "aqua";
        boton.innerHTML = "¡Pasa el ratón!"
    })
}