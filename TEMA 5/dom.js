window.onload = () => {
    var lista = document.getElementById("lista");
    var opciones = document.getElementsByTagName("li");

    var mibtn = document.getElementById("miBtn");
    let nuevoLi = document.createElement("li");

    mibtn.addEventListener("click",()=>{
        let contenidoInput = document.getElementById("input").value;
        let nuevoLi = document.createElement("li");
        nuevoLi.innerHTML = contenidoInput;
        lista.appendChild(nuevoLi);

        document.getElementById("input").value = "";

    })

    var mibtnBorrar = document.getElementById("mibtnBorrar");
    lista.addEventListener("click", (e)=>{

        if(confirm("¿Seguro que deseas borrar la entrada "+e.target.innerHTML+"?")){
            lista.removeChild(e.target);
        }
    })
}