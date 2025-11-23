export default function Boton(){
    function alertaClick(){
        alert("Clicked");
    }
    
    return(
        <button onClick={alertaClick}>Click me</button>
    )
}