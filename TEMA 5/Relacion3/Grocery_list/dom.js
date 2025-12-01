function creaVistaNota(elemento){
    cont = document.getElementById("lista");
    li = document.createElement("li");
    li.innerHTML = elemento;
    cont.appendChild(li);
}

window.onload = () => {
    var lista = document.getElementById("lista");
    lista = JSON.parse(localStorage.getItem("lista"));
    if(lista){
        for(elemento of lista){
            creaVistaNota(elemento);
        }
    }else
        lista = [];
    var mibtn = document.getElementById("miBtn");

    mibtn.addEventListener("click",()=>{
        let contenidoInput = document.getElementById("input").value;
        lista.push(contenidoInput);
        let nuevoLi = document.createElement("li");
        let nuevoBtnBorrar = document.createElement("button");
        let nuevoBtnEditar = document.createElement("button");
        nuevoLi.innerHTML = lista[lista.length-1];
        lista.appendChild(nuevoLi);
        nuevoLi.appendChild(nuevoBtnBorrar);
        nuevoLi.appendChild(nuevoBtnEditar);
        nuevoBtnEditar.innerHTML = "Editar";
        nuevoBtnBorrar.innerHTML = "Borrar";
        localStorage.setItem("lista",JSON.stringify(lista));
        document.getElementById("input").value = "";

        nuevoBtnEditar.addEventListener("click",() => {
        texto = prompt("Introduce el nuevo texto:");
        nuevoLi.innerText = texto;
        })

        nuevoBtnBorrar.addEventListener("click",() => {
            if(confirm("¿Seguro que deseas borrar esta entrada?")){
                lista.removeChild(nuevoLi);
            }
        })
    })

    var mibtnBorrar = document.getElementById("clear");
    mibtnBorrar.addEventListener("click", ()=>{

        if(confirm("¿Seguro que deseas borrar la lista entera? ")){
            lista.innerHTML = "";
        }
    })
}