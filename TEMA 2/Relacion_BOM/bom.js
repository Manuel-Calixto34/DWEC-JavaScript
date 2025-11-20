let miDiv = document.getElementById("info");
let miDiv2 = document.getElementById("navegacion");
let miDiv3 = document.getElementById("red");
let miDiv4 = document.getElementById("info_screen");

miDiv.innerHTML=("<h2>Información del navegador</h2><br> Navegador: "+navigator.userAgent+"<br> Idioma: "+navigator.language+"<br> Plataforma: "+navigator.platform+"<br> Resolución: "+screen.width+" x "+screen.height);

miDiv2.innerHTML=("<h2>🧭Navegación</h2> URL actual: "+window.location.href);

function redirigir(){
    window.location.href("https://www.google.com/?zx=1759399448136&no_sw_cr=1");
}


miDiv3.innerHTML=("<h2>Redirección</h2> <br> <button onclick=redirigir()>Ir a google</button>");

miDiv4.innerHTML=("<h2>Información de la pantalla</h2> Resolución: "+screen.width+" x "+screen.height+"<br> Área disponible: "+window.screen.availWidth+" x "+window.screen.availHeight+
    "<br> Orientación: "+screen.orientation+" <br> Profundidad de color: "+screen.colorDepth+" <br> Profundidad de pixel: "+screen.pixelDepth);