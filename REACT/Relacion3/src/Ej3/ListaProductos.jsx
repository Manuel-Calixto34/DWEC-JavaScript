import Producto from "./Producto"

export default function ListaProductos({productos}){
    let lista = productos.map((producto,indice)=> 
    <Producto key={indice} id={indice} nombre={producto.nombre} precio={producto.precio}></Producto>
    )

    return(
        <>
        <ul>
            {lista}
        </ul>
        </>
    )
    
}