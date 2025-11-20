window.onload = () =>{
    let numero = elegirNumero();
    let enunciado = document.getElementById("pregunta").innerHTML = ("Haz clic en el número "+numero);
    let respuesta = document.getElementById("respuesta");
    let botones = document.getElementById("botones");
    botones.addEventListener("click",(e)=>{
        evento = e.target.id;
        if(evento == numero){
            respuesta.innerHTML = "Acertaste!";
            numero = elegirNumero();
            enunciado = document.getElementById("pregunta").innerHTML = ("Haz clic en el número "+numero);
        }else
            respuesta.innerHTML = "Botón incorrecto";
    })

}

function elegirNumero(){
    let arrayNum = [1,2,3,4,5,6,7,8,9];
    let numRandom = Math.floor(Math.random()*8);
    num = arrayNum[numRandom];
    return num;
}