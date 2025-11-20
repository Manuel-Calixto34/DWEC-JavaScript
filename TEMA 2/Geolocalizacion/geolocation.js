function mostrarUbicacion(position) {
  console.log("Latitud: " + position.coords.latitude);
  console.log("Longitud: " + position.coords.longitude);
}

function mostrarError(error) {
  console.log("Error al obtener la ubicación: " + error.message);
}

// Comprueba si el navegador soporta la API de geolocalización
if (navigator.geolocation) {
  // Obtiene la posición actual del usuario
  navigator.geolocation.getCurrentPosition(mostrarUbicacion, mostrarError);
} else {
  console.log("Tu navegador no soporta la geolocalización.");
}
/*function obtenerPosicion(posicion){
    console.log(posicion.coords.latitude, posicion.coords.latitude)

    var map = L.map('map').setView([posicion.coords.latitude, posicion.coords.latitude], 19);

    L.titleLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    var marker = L.marker([posicion.coords.latitude, posicion.coords.latitude]).addTo(map);
};

if(navigator.geolocation){
    navigator.geolocation.watchPosition(obtenerPosicion);
}
else{
    console.log("No se puede encontrar la posicion");
};
*/

