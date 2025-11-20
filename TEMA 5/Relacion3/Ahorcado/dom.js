window.onload = () => {
    let vidas = 10;
    let palabra = elegirPalabra();
    let rayas = [];

    const rayDiv = document.getElementById("rayas");
    const botones = document.getElementById("botones");
    const respuesta = document.getElementById("respuesta");

    
    for (let i = 0; i < palabra.length; i++) {
        rayas.push("_");
    }

    rayDiv.innerHTML = rayas.join(" ");

    botones.addEventListener("click", (e) => {
        let letra = e.target.textContent;

        if (palabra.includes(letra)) {
            
            for (let i = 0; i < palabra.length; i++) {
                if (palabra[i] === letra) {
                    rayas[i] = letra;
                }
            }

            rayDiv.innerHTML = rayas.join(" ");
            respuesta.innerHTML = "¡Letra correcta!";
        } else {
            vidas--;
            respuesta.innerHTML = "Letra incorrecta. Vidas restantes: "+vidas;
        }

        if (!rayas.includes("_")) {
            respuesta.innerHTML = "¡Has ganado!";
        }

        if (vidas <= 0) {
            respuesta.innerHTML = "Has perdido. La palabra era: " + palabra;
        }

        
        e.target.disabled = true;
    });
};


function elegirPalabra(){
    let andalucia = ["GRANADA","MALAGA","CADIZ","HUELVA","ALMERIA","CORDOBA","JAEN"];
    let numRandom = Math.floor(Math.random()*6);
    let palabra = andalucia[numRandom];
    return palabra;
}