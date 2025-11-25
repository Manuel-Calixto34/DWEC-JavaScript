let datosAMaquetar = {
  "colors": [
    {
      "color": "black",
      "category": "hue",
      "type": "primary",
      "code": {
        "rgba": [255,255,255,1],
        "hex": "#000"
      }
    },
    {
      "color": "white",
      "category": "value",
      "code": {
        "rgba": [0,0,0,1],
        "hex": "#FFF"
      }
    },
    {
      "color": "red",
      "category": "hue",
      "type": "primary",
      "code": {
        "rgba": [255,0,0,1],
        "hex": "rgba(255, 0, 0, 1)"
      }
    },
    {
      "color": "blue",
      "category": "hue",
      "type": "primary",
      "code": {
        "rgba": [0,0,255,1],
        "hex": "#00F"
      }
    },
    {
      "color": "yellow",
      "category": "hue",
      "type": "primary",
      "code": {
        "rgba": [255,255,0,1],
        "hex": "#FF0"
      }
    },
    {
      "color": "green",
      "category": "hue",
      "type": "secondary",
      "code": {
        "rgba": [0,255,0,1],
        "hex": "#0F0"
      }
    }
  ]
}




window.onload = ()=>
{
    cont = document.getElementById("contenedor")
    for(color of datosAMaquetar.colors){
        miDiv = document.createElement("div")
        miDiv.style.backgroundColor = color.code.hex;
        miDiv.innerHTML = color.color +"<br> "+ color.category+" <br>"+color.type+" <br>"+color.code.rgba+" <br>"+color.code.hex;
        if(color.color == "black"||color.color == "red"||color.color == "blue"){
            miDiv.style.color = "#FFF";
        }
        cont.appendChild(miDiv);
    }
}