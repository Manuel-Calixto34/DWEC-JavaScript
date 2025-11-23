import {useState} from "react";

function Boton({limite}){
    let resultado;
    const [contador, setContador] = useState(0);

    function incrementaContador(){
        setContador(contador+1);
    }

    

    if(contador>=limite){
        resultado = <button disabled >No puedes pulsarme</button>
    }else
        resultado = <button onClick={incrementaContador}>Pulsame</button>

    return resultado;
}

export default Boton;