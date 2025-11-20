//Captura el movimiento del ratón, para que se muestre la posición en la que se encuentra cada movimiento
window.onload = () => posRaton();
function posRaton(){
    document.addEventListener("mousemove",(e) => console.log(e));
}