/*
window.onload = () => {
    let tr, td;
    let tabla = document.getElementById("miTabla");

    for(let i=0;i<300;i++){
        tr = document.createElement("tr");
        tr.addEventListener("mouseover",entra);

        for(j=0;j<300;j++){
            td = document.createElement("td");
            tr.appendChild(td);
        }
        tabla.appendChild(tr);
    }
}
*/

window.onload = () => {
    let btn = document.getElementById("boton");
    btn.addEventListener("click",limpiar);

    limpiar();
}

function entra(e){
    e.target.style.backgroundColor = "red";
    if(e.ctrlKey){
        e.target.style.backgroundColor = "white";
    }else if(e.altKey){
        document.body.style.backgroundColor = "green";
    }
}

function limpiar(){
    let tabla = document.getElementById("miTabla");
    let aux = "";
    for(i=0;i<30;i++){
        aux += "<tr>";
        for(j=0;j<30;j++){
            aux += "<td></td>"
        }
        aux += "</tr>";
    }
    tabla.innerHTML = aux;

    //Asociar eventos 
    let tr = document.getElementsByTagName("td");
    for(celda of tr)
        celda.addEventListener("mouseover",entra);
}