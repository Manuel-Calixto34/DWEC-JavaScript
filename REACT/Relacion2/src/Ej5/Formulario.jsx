import { useState } from "react";

export default function Formulario(){
    const [nombre,setNombre] = useState("");
    const [email,setEmail] = useState("");

    function mostrarInfo(e){
        e.preventDefault;
        let array = [{ nombre }, { email }];
        console.log(array);
        return <p>Nombre: {nombre} Email: {email}</p>
    }


    return(
        <>
            <h1>Ejercicio 5</h1>
            
            <form>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}></input>
                <label htmlFor="email">Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <input type="submit" value="Enviar" onClick={mostrarInfo} onSubmit={(e) => e.preventDefault()}></input>
                <p>{mostrarInfo}</p>
            </form>
            
        </>
    )
}