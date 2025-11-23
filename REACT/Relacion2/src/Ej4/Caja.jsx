import { useState } from "react";
import './style.css';

export default function Caja(){
    const [color,setColor] = useState("grey");

    function cambiarColor(){
       
    }

    return(
        <>
            <h1>Ejercicio 4</h1>
            <div class="caja" style={{ backgroundColor: color }}></div>
            <input type="texto" value={color} onChange={(e) => setColor(e.target.value)}></input>
        </>
    )
}