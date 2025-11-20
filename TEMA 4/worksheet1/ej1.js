//Captura el evento onclick para que cada ve que suceda se ejecute un alert

window.onload = () => hacerClick();

function hacerClick(){
    document.addEventListener("click",(e) => alert("SEA SALT"));
}