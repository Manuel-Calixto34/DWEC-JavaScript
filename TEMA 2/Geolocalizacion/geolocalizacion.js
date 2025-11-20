//1 y 3. Obtener tu ubicación actual con control de errores
/*function mostrarUbicacion(position) {
  console.log("Latitud: " + position.coords.latitude);
  console.log("Longitud: " + position.coords.longitude);
  console.log("Precisión: "+position.coords.accuracy);
  var map = L.map('map').setView([position.coords.latitude,position.coords.longitude], 13);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  var marker = L.marker([position.coords.latitude,position.coords.longitude]).addTo(map);
  const puntoFijo = [40.40751843888811, -3.7070160344721748];
  console.log("La distancia hasta Madrid es de: "+map.distance(puntoFijo,[position.coords.latitude,position.coords.longitude]));
  let ruta = [
    [37.19060986000582, -3.6113791593720053],
    [37.1922623630042, -3.6175189071835563]
  ];
  let puntos = [];
  var polyline = L.polyline(puntos).addTo(map);

  map.fitBounds(polyline.getBounds());
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  puntos.push([lat,lng]);
  polyline.setLatLng([lat,lng]);
  map.setView([lat,lng],15);
}
navigator.geolocation.watchPosition(mostrarUbicacion);
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
/*
//2. Mostrar la ubicación en la página
let miParrafo = document.getElementById("ubicacion");
if(navigator.geolocation){
miParrafo.innerHTML=(navigator.geolocation.getCurrentPosition(mostrarUbicacion, mostrarError));
}

//4. Actualizar ubicacion en tiempo real

if(navigator.geolocation){
  navigator.geolocation.watchPosition(mostrarUbicacion, mostrarError);
}else
  console.log("Tu navegador no soprta la geolocalización");
*/

//5. Integración con Google Maps o Leaflet (integrado en el ejercicio 1)

//6. Mostrar precisión de la ubicación position.coords.acurracy

//7. Calcular la distancia entre dos ubicaciones

/*function calcularDistancia(lat1,lon1,lat2,lon2){
  const r = 6371; //Radio de la tierra en km
  const diferenciaLatitud = (lat2-lat1) * Math.PI /  180;
  const diferenciaLongitud = (lon2-lon1) * Math.PI / 180;

  const a =
    Math.sin(diferenciaLatitud / 2) * Math.sin(diferenciaLatitud * 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(diferenciaLongitud/2) * Math.sin(diferenciaLongitud/2);

   const c = 2* Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); 

   const distancia = r*c;
   return distancia;
} */
var listadoPuntos = [];
 var map, marker, polyline;
//8. Trazar ruta en un mapa
function success(pos){
  punto = [pos.coords.latitude, pos.coords.longitude];
  listadoPuntos.push(punto);
  if(listadoPuntos.length == 1){
    map = L.map("map").setView(punto, 20);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    marker = L.marker(punto).addTo(map);
    polyline = L.polyline(listadoPuntos).addTo(map);
    var circle = L.circle(punto, {
      color: 'blue',
      fillColor: 'rgba(0, 60, 255, 1)',
      fillOpacity: 0.5,
      radius: 5
    }).addTo(map);
  }else{
    map.setView(punto,20);
    marker.setLatLng(punto);
    polyline.setLatLngs(listadoPuntos);
  }
}

navigator.geolocation.watchPosition(success);

//9.Geofencing básico

//10. App de rastreo de actividad
navigator.geolocation.getCurrentPosition(
  (pos) => console.log(pos.coords.latitude, pos.coords.longitude),
  (err) => console.error(err),
  { enableHighAccuracy: true }
);

function calcularDistancia(lat1,lon1,lat2,lon2){
  const r = 6371; //Radio de la tierra en km
  const diferenciaLatitud = (lat2-lat1) * Math.PI /  180;
  const diferenciaLongitud = (lon2-lon1) * Math.PI / 180;

  const a =
    Math.sin(diferenciaLatitud / 2) * Math.sin(diferenciaLatitud * 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(diferenciaLongitud/2) * Math.sin(diferenciaLongitud/2);

   const c = 2* Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); 

   const distancia = r*c;
   return distancia;
} 

function calcularDistanciaTotal() {
  let total = 0;
  for (let i = 1; i < posiciones.length; i++) {
    const p1 = posiciones[i - 1];
    const p2 = posiciones[i];
    total += distanciaEntrePuntos(p1.lat, p1.lon, p2.lat, p2.lon);
  }
  return total; // metros
}

let posiciones = [];
let intervalo;
let tiempoInicio;
function iniciarRastreo(){
  tiempoInicio = Date.now();
  intervalo = setInterval(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      posiciones.push({
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
        tiempoInicio: Date.now(),
      });
      console.log("Posición guardada:", posiciones[posiciones.length - 1]);
    });
  },10000);

}

function detenerRastreo(){
  clearInterval();
}
