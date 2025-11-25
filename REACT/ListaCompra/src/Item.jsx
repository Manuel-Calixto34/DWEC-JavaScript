import { useState } from "react";

export default function Item({nombre,onDelete,onNuevoTexto,id}){
    const [modoEdicion,setModoEdicion] = useState(false);
    const [nombreEditado,setNombreEditado] = useState(nombre);
    let jsxresultado;
    function entraEnEdicion(){
        setModoEdicion(true);
    }

    function avisaGuardarCambios(){
        setModoEdicion(false);
        onNuevoTexto(nombreEditado,id);
    }

    function cancelar(){
        setModoEdicion(false);
    }

    if(!modoEdicion){
        jsxresultado = <li>{nombre}<button onClick={entraEnEdicion}>Editar</button> <button onClick={()=> onDelete(id)}>Eliminar</button></li>
    }else
        jsxresultado = <li><input value={nombreEditado} onChange={e => setNombreEditado(e.target.value)}/>
        <button onClick={avisaGuardarCambios}>Guardar cambios</button>
        <button onClick={cancelar}>Cancelar cambios</button></li>
    
    return (jsxresultado);
}