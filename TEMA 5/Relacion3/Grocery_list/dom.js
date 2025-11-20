window.onload = () => {
    var lista = document.getElementById("lista");
    var mibtn = document.getElementById("miBtn");

    mibtn.addEventListener("click",()=>{
        let contenidoInput = document.getElementById("input").value;
        let nuevoLi = document.createElement("li");
        let nuevoBtnBorrar = document.createElement("button");
        let nuevoBtnEditar = document.createElement("button");
        nuevoLi.innerHTML = contenidoInput;
        lista.appendChild(nuevoLi);
        nuevoLi.appendChild(nuevoBtnBorrar);
        nuevoLi.appendChild(nuevoBtnEditar);
        nuevoBtnEditar.innerHTML = "Editar";
        nuevoBtnBorrar.innerHTML = "Borrar";
        document.getElementById("input").value = "";
        nuevoBtnEditar.addEventListener("click",(e) => {
        texto = prompt("Introduce el nuevo texto:");
        nuevoLi.innerText = texto;
        })

        nuevoBtnBorrar.addEventListener("click",(e) => {
            if(confirm("¿Seguro que deseas borrar esta entrada?")){
                lista.removeChild(nuevoLi);
            }
        })
    })

    var mibtnBorrar = document.getElementById("clear");
    mibtnBorrar.addEventListener("click", (e)=>{

        if(confirm("¿Seguro que deseas borrar la lista entera? ")){
            lista.innerHTML = "";
        }
    })
}