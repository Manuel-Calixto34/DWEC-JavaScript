//1. Crear un array con los nombres de 5 frutas e imprimir la primera y última.
let frutas = ["manzana","pera","naranja","kiwi","cereza"];
for(let i = 0;i<frutas.length;i++){
    console.log(frutas[i]);
}

//6. Duplicar los valores de un array numérico
result = [1,2,3,4,5,6];

console.log(result.map( (a) => a*2));

//7. Filtrar los números pares de un array
console.log(result.filter((a) => a%2==0));

//8. Sumar todos los valores de un array
console.log(result.reduce((a,b) => a+b));

//9. Ordenar un array de nombres alfabéticamente y en orden inverso
nombres = ["Maria","Pepe","Javi","Aron","Calamardo"];

console.log(nombres.sort());
console.log(nombres.reverse());

//10. Convertir un array en una cadena de texto separada por comas

console.log(frutas.join());

//11. Dividir una cadena texto en un array
let cadena = "I need you Cecil";

console.log(cadena.split(" "));

//12. Eliminar duplicados de un array
let numeros = [1,2,2,3,4,7,7,9];
let arraySinDuplicados = [...new Set(numeros)];
console.log(arraySinDuplicados); // [1, 2, 4, 6, 7]


//13. Encontrar el número mayor y menor en un array
for(let i =0;i<numeros;i++){
    numeroMax = Math.maxnumeros[i]
    console.log(Math.min(Number(numeros[i])));
    console.log();
}

//14. Aplanar un array de arrays
let array2d = [[1,2],[3,4]];
console.log(array2d.flat());

//15. Contar cuántas veces aparece un elemento en un array
function cuantasVecesRepite(num,ar){
    let numerosApariciones = 0;

    ar.forEach((valor) => {
        if(valor==num)
            numerosApariciones++;
    })

    return numerosApariciones;
}

function cuantasVecesRepiteReduce(num, ar) {
    array = ar.reduce((contador, valor) => {
        return contador + (valor == num ? 1 : 0);
    }, 0);
    return array;
}



let ar = [1,3,3,4,5,6,3];
 
console.log(cuantasVecesRepite(3,ar));
console.log(cuantasVecesRepiteReduce(3,ar));

//16. Transformar un array de objetos en un array de una sola propiedad
const personas = [
  { nombre: "Ana", edad: 23 },
  { nombre: "Luis", edad: 30 }
];


// Resultado esperado: ["Ana", "Luis"]

//17. Combinar dos arrays (por ejemplo, de nombres y edades) en uno de objetos

const nombre = ["Manuel","Juan","Pablo","Lucia"];
const edades = [16,18,23,19];
const combinados = nombre.map((nombre, index) => {
    return{
        ...nombre,
        ...edades[index]
    };
});

console.log(combinados);


//18. Ordenar un array de objetos según una propiedad
const usuarios = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 30 },
  { nombre: "Marta", edad: 20 }
];
console.log(usuarios.sort((a, b) => a.edad - b.edad));

//19. Extraer elementos únicos y ordenarlos de menor a mayor

let num = [5, 3, 8, 3, 1, 5, 9, 2];


let unicos = [...new Set(num)];


let ordenados = unicos.sort((a, b) => a - b);

console.log(ordenados); 


//20. Usar encadenado de métodos: Dado un array de números, debes calcular la suma 
//de los cuadrados de los números pares.
//let num = [5, 3, 8, 3, 1, 5, 9, 2];
const suma = num.filter(a => a % 2 == 0).map((a) => a*a).reduce((a, b) => a + b);
console.log(suma);