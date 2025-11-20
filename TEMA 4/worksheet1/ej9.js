
window.onload = () => {

    
    const laImagen = document.getElementById("imagenes");
    let clickado = false;
    let offsetX,offsetY;
    laImagen.addEventListener('mousedown',(e)=> {
        clickado = true;
        offsetX = e.clientX - laImagen.offsetLeft;
        offsetY = e.clientY - laImagen.offsetTop;
        laImagen.style.cursor = 'grabbing';
    });

    document.addEventListener("mousemove",(e)=>{
        //obtengo la posición del raton
        if(clickado){
            laImagen.style.left = (e.clientX - offsetX) + 'px';
            laImagen.style.top = (e.clientY - offsetY) + 'px';
        }
    })

    document.addEventListener('mouseup', () => {
        clickado = false;   
        laImagen.style.cursor = 'grab';
    });
    
}
