import {useState} from "react";
import './formulario.css'

export default function Formulario(){
    const [nombre,setNombre] = useState("");
    const [apellido,setApellido] = useState("");

    function greeting(){
        alert("Hello "+nombre+" "+apellido+"!");
        setNombre("");
        setApellido("");
    }

    return(
        <>
            <input type="text" placeholder="Name" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}></input>
            <input type="text" placeholder="Surname" id="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)}></input>
            <button onClick={greeting}>Greet me</button>
        </>
    )
    
}