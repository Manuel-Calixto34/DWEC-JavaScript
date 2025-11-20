//Nivel 1 - Creación y lectura de fechas

//1. Fecha actual
let fecha = new Date();
console.log(fecha);

//2. Fecha específica
let fecha_es = new Date("2001-07-06");
console.log(fecha_es);

//3. Obtener partes de una fecha

console.log("Año: "+fecha_es.getFullYear());
console.log("Mes: "+fecha_es.getMonth());
console.log(fecha_es.getDate());
console.log("Día: "+fecha_es.getDay());
console.log("Hora: "+fecha_es.getHours(),"Minutos: "+fecha_es.getMinutes(),"Segundos: "+fecha_es.getSeconds());

//4. Convertir a string
console.log(fecha.toDateString());
console.log(fecha.toTimeString());

//Nivel 2 - Operaciones con fechas

//5. Sumar días

function sumar_dias(fech,num_dias){
    fech.setDate(fech.getDate() + num_dias);
    return fech;
}

sumar_dias(fecha,12);

//6. Diferencia entre dos fechas
let fecha2 = new Date("2025-12-31");
const diferenciaMilisegundos = fecha2.getTime() - fecha.getTime();
const diferenciaDias = diferenciaMilisegundos / (1000*60*60*24);

console.log("Quedan "+Math.floor(diferenciaDias)+" días");

//7. Comparar fechas
if(fecha.getTime()>fecha2.getTime()){
    console.log("La primera fecha es posterior a la segunda");
}else if(fecha.getTime()<fecha2.getTime()){
    console.log("La primera fecha es anterior a la segunda");
}else
    console.log("Son iguales");

//8. Primer día del mes

function primer_dia(mes,año){
    let fec = new Date(año+"-"+mes+"-01");
    return fec.getDay();
}

console.log(primer_dia(10,2025));

//9. ISO String

console.log(fecha.toISOString());

//10. Fecha local y UTC

console.log(fecha.toLocaleDateString());
console.log(fecha.toUTCString());

//11. Formateo personalizado
function date_string(date){
    console.log(date.getDay()+"/"+date.getMonth()+"/"+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds());
}

date_string(fecha);

//12. Internacionalización
console.log(new Intl.DateTimeFormat("es-ES").format(fecha));
console.log(new Intl.DateTimeFormat("en-US").format(fecha));
console.log(new Intl.DateTimeFormat("ja-JP-u-ca-japanese").format(fecha));

//13. Cuenta atrás
function cuentaAtrasAñoNuevo(){
let año_nuevo = new Date("2025-12-31");
const diferenciamiliSegundos = año_nuevo.getTime() - fecha.getTime();
const diferenciadias = Math.floor(diferenciamiliSegundos / (1000*60*60*24));
const diferenciaSegundos = Math.floor(diferenciamiliSegundos % (1000 * 60) / 1000);
const diferenciaMinutos = Math.floor(diferenciaMilisegundos  % (1000 * 60 * 60) / (1000 * 60));
const diferenciaHoras = Math.floor(diferenciaMilisegundos % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));

console.log("Cuenta atrás: "+diferenciadias+":"+diferenciaHoras+":"+diferenciaMinutos+":"+diferenciaSegundos);
}
cuentaAtrasAñoNuevo();
//14. Edad exacta
function edad_exacta(){
    let cumpleaños = new Date("2006-08-01");
    const diferenciaAños = fecha.getFullYear() - cumpleaños.getFullYear();
    const diferenciaMes = fecha.getMonth() - cumpleaños.getMonth();
    const diferenciAdias = fecha.getDate() - cumpleaños.getDate();
    console.log("Tiene "+diferenciaAños+" años"+", "+diferenciaMes+" meses y "+diferenciAdias+" días");
}

edad_exacta();
//15. Calendario simple

function calendario(año,mes){
    const fechas = [];
    const fecha = new Date(año, mes, 1);

while(fecha.getMonth() === mes){
    fechas.push(new Date(fecha));
    fecha.setDate(fecha.getDate() + 1);
}

return fechas;

}

const septiembre2025 = calendario(2025,8);
console.log(septiembre2025);


//16. Próximo viernes 13

/*function proximoViernes13(nueva_fecha = new Date()){
    let año = nueva_fecha.getFullYear();
    let mes = nueva_fecha.getMonth();

    while(true){
        const fecha = new Date(año, mes, 13);

        if(fecha.getDay()===5 && fecha > nueva_fecha){
            return fecha;
        }
        mes++;
        if(mes>11){
            mes = 0;
            año++;
        }
    }
}

const siguiente = proximoViernes13();
console.log("Proximo viernes 13: "+siguiente.toDateString());*/

//Devuelve la fecha del siguiente viernes 13

function encuentraViernes13(){
    let resultado = new Date();
    let encontrado = false;

    while(!encontrado){
        if (resultado.getDay() == 5 && resultado.getDate() == 13){
            encontrado = true;
        }else
            resultado.setDate(resultado.getDate()+1);
    }

    return resultado;

}

console.log(encuentraViernes13());
