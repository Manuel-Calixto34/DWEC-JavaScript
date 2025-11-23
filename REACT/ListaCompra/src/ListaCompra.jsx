import { useState } from 'react';
import Item from './Item.jsx';
import Pie from './Pie.jsx';

export default function ListaCompra(){
    const [listaCompra,setListaCompra] = useState(["pan","azucar"]);
    const [contenido,setContenido] = useState("");

    function añadirElemento(){
        setListaCompra([...listaCompra,contenido]);
        setContenido("");
    }

    function actualizarElemento(nuevoContenido,id){
        const nuevaLista = [...listaCompra];
        nuevaLista[id] = nuevoContenido;
        setListaCompra(nuevaLista);
    }

    function eliminarElemento(indice){
        const nuevaLista = [...listaCompra] 
        nuevaLista.splice(indice,1);
        setListaCompra(nuevaLista);
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
            <button onClick={añadirElemento}>Añadir</button>
            {maqueta}
            <Pie onClick={borrarLista}></Pie>
        </>
    )
}