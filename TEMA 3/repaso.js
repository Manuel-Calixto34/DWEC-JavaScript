/*function calculaArea(a,b,c){
    console.log("Entra en función con "+ a);
}

calculaArea(1,3,2);*/

/*function calculaArea(a,b){
    let resultado = 0;
    if(a && b){
        resultado = a * b;
    }else
        resultado = null;

    return resultado;
}

console.log(calculaArea(3,2));
*/
let nombres = [20,22,220,12,1,32,5];

function funcionCompararNumeros(a,b){
    
    if (a<b){
        return -1;
    }else if (a>b){
        return 1;
    }else
        return 0;
   
}

nombres.sort(funcionCompararNumeros);
console.log(nombres);

/*let alumnos = [
    ["Julio","De Rivas Garcia Lopez",20],
    ["Alejandro","Felipe",21],
    ["Jose","Ordoñez",30],
    ["Antonio","Piñero",15]
];*/

let alumnos = [
    {nombre: "Abraham", edad: 25},
    {nombre: "Raul", edad: 23},
    {nombre: "Juan Carlos", edad: 20}
];

function funcionCompararAlumnos(a,b){
    if(a.edad<b.edad){
        return -1;
    }else if(a.edad>b.edad){
        return 1;
    }else if(a.nombre < b.nombre){
        return -1;
    }

}

nombres.sort( (a,b )=>{
    if(a<b){
        return -1;
    }
    else if(a>b){
        return 1;
    }else
         return 0;
})


alumnos.sort(funcionCompararAlumnos);

console.log(alumnos);

const arrayNotas = [5.2,3.9,6,9.75,7.5,3];

const aprobados = arrayNotas.map((nota)=> nota*2)
arrayNotas.forEach((nota)=> console.log("Nota"+nota));
console.log(aprobados);