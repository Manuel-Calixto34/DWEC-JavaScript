import { useState } from "react";

export default function Toggle(){
    const [estado,setEstado] = useState(true);
    const [contenido,setContenido] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
    const [nombreBoton,setNombreBoton] = useState("Ocultar");
    function visible(){
        if(estado==false){
            setEstado(true);
            setNombreBoton("Ocultar");
            setContenido("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        }else if(estado==true){
            setEstado(false);
            setNombreBoton("Mostrar");
            setContenido("El texto esta oculto");
        }
    }

    return(
        <>
            <h1>Ejercicio 2</h1>
            <p>{contenido}</p>
            <button onClick={visible}>{nombreBoton}</button>
        </>
    )
}