import { useState } from "react";

export default function Boton(){
    const [contador,setContador] = useState(0);

    function incrementar(){
        setContador(contador+1);
    }

    function decrementar(){
        if(contador<=0){
            setContador(0);
        }else
            setContador(contador-1);
    }

    function resetear(){
        setContador(0);
    }

    function duplicar(){
        setContador(contador*2);
    }

    return(
        <>
            <h1>Ejercicio 1</h1>
            <p>Valor: {contador}</p>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
            <button onClick={resetear}>Resetear</button>
            <button onClick={duplicar}>Duplicar</button>
        </>
    )


}