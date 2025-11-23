export default function Boton({alerta,nombre}){
    function alertaClick(){
        alert(alerta);
    }
    
    return(
        <button onClick={alertaClick}>{nombre}</button>
    )
}