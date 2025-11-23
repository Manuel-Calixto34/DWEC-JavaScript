import { useState } from 'react';
import Item from './Item.jsx';

export default function ListaCompra(){
    let secuenciaItems = [];
    const [listaCompra,setListaCompra] = useState(["pan","azucar"]);
    const [contenido,setContenido] = useState("");

    function borrarElemento(){
        console.log("Me avisan de que debo borrar");
    }

    function pulsoBoton(){
        setListaCompra([...listaCompra,contenido]);
        setContenido("");
    }

    function actualizarElemento(nuevoContenido,id){
        listaCompra[id] = nuevoContenido;
        setListaCompra([...listaCompra])
    }

    for(let i = 0;i<listaCompra.length;i++){
        secuenciaItems.push(<Item nombre={listaCompra[i]}></Item>)
    }

    let maqueta = listaCompra.map((elementoDeArray,indice)=> <Item key={indice}></Item>)

    return (
        <>
            <input value={contenido} onChange={e => setContenido(e.target.value)} onNuevoTexto={(texto)=>actualizarElemento(texto,id)}></input>
            <button onClick={pulsoBoton}>Añadir</button>
            {maqueta}
        </>
    )
}