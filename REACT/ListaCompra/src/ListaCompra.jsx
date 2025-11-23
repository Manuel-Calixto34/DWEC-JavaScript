import { useState } from 'react';
import Item from './Item.jsx';
import Pie from './Pie.jsx';

export default function ListaCompra(){
    const [listaCompra,setListaCompra] = useState(["pan","azucar"]);
    const [contenido,setContenido] = useState("");

    function pulsoBoton(){
        setListaCompra([...listaCompra,contenido]);
        setContenido("");
    }

    function actualizarElemento(nuevoContenido,id){
        const nuevoArray = [...listaCompra];
        nuevoArray[id] = nuevoContenido;
        setListaCompra(nuevoArray);
    }

    function eliminarElemento(indice){
        const nuevoArray = [...listaCompra] 
        elemento = listaCompra.splice(indice,1);
    }

    function borrarLista(){
        setListaCompra([]);
    }

    let maqueta = listaCompra.map((item,indice)=> <Item key={indice}
            nombre={item}
            id={indice}
            onNuevoTexto={actualizarElemento}
            onDelete={eliminarElemento}></Item>)

    return (
        <>
            <input value={contenido} onChange={e => setContenido(e.target.value)}></input>
            <button onClick={pulsoBoton}>Añadir</button>
            {maqueta}
            <Pie onClick={borrarLista}></Pie>
        </>
    )
}