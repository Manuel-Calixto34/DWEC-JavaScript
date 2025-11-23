import { useState } from 'react'

export default function Boton(){
    const [contador, setContador] = useState(0);

    function incrementaContador(){
        setContador(contador+1);
    }

    return(
        <>
        <p>Button has been clicked: {contador} times</p>
        <button onClick={incrementaContador}>Click me</button>
        </>
    );
}