import { useState } from "react";
import './style.css'

export default function Perfil({nombre,edad,online,imagenUrl}){
    
    let isOnline = (online ? "El usuario está online" : "El usuario no está online");

    return(
        <>
            <div class="card">
                <h2>Nombre: {nombre}</h2>
                <h2>Edad: {edad}</h2>
                <h2>Online?: {isOnline}</h2>
                <img src={imagenUrl} alt="foto"></img>
            </div>
        </>
    )
}