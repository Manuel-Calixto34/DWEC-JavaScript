import { useState } from "react"

export default function Input(){
    const [texto,setTexto] = useState("");

    function limpiar(){
        setTexto("");
    }

    return(
        <>
            <h1>Ejercicio 3</h1>
            <input type="text" value={texto} onChange={(e) => setTexto(e.target.value)}></input>
            <p>{texto}</p>
            <button onClick={limpiar}>Limpiar</button>
        </>
    )
}