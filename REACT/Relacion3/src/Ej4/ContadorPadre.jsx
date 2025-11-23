import { useState } from "react";
import BotonIncrementar from "./BotonIncrementar";
import BotonResetear from "./BotonResetear";

export default function ContadorPadre(){
    const [count,setCount] = useState(0);

    function incrementar(){
        setCount(count+1);
    }

    function resetear(){
        setCount(0);
    }

    return(
        <>
            <h1>Contador: {count}</h1>
            <BotonIncrementar onClick={incrementar} ></BotonIncrementar>
            <BotonResetear onClick={resetear}></BotonResetear>
        </>    
    )
}