var segundos = 0;
var titulo = document.getElementById("titulo");
var miDiv = document.getElementById("reloj");
var dia = document.getElementById("dia");
function intervalo(){
    let horaActual = new Date();
    miDiv.innerHTML=(horaActual.getHours()+":"+horaActual.getMinutes()+":"+horaActual.getSeconds());
    dia.innerHTML=(horaActual.toLocaleDateString("es-ES"));
}
setInterval(intervalo,1000);
