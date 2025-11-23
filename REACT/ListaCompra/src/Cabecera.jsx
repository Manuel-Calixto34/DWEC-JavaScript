import {useState} from 'react';
function Cabecera(){
    const [titulo, setTitulo] = useState("Grocery Bud");

    return (
    <>
        <h1>{titulo}</h1>
    </>
    )
}

export default Cabecera;