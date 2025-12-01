import { useState } from 'react';
import Item from './Item.jsx';
import Pie from './Pie.jsx';

export default function ListaCompra(){
    let datosIniciales = {"items":[
        {
            "nombre":"pan",
            "cantidad":"2"
        },
        {
            "nombre":"azucar",
            "cantidad":"1"
        }
    ]}
    const [listaCompra,setListaCompra] = useState(datosIniciales.items);
    const [contenido,setContenido] = useState("");

    function añadirElemento(){
        setListaCompra([...listaCompra,{"nombre":contenido}]);
        setContenido("");
    }

    function actualizarElemento(nuevoContenido,id){
        const nuevaLista = [...listaCompra];
        nuevaLista[id] ={"nombre":nuevoContenido};
        setListaCompra(nuevaLista);
    }

    function eliminarElemento(indice){
        const nuevaLista = [...listaCompra]; 
        nuevaLista.splice(indice,1);
        setListaCompra(nuevaLista);
    }

    function borrarLista(){
        setListaCompra([]);
    }

    let maqueta = listaCompra.map((item,indice)=> <Item key={indice}
            nombre={item.nombre}
            cantidad={item.cantidad}
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