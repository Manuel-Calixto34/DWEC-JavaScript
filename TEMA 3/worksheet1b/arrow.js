//Arrow functions

//1. Two arguments

let suma = (num1,num2) => num1+num2;

console.log(suma(0,3));

//2. One argument

let longitud = cadena => console.log("La longitud de la cadena "+cadena+" es de "+cadena.length+" caracteres");
longitud("Walter");

//3. One argument pt2
let length = cadena => {return "La longitud de la cadena "+cadena+" es de "+cadena.length+" caracteres"};

console.log(length("Paraguay"));

//4. One argument
let alerts  = ["Hey, you are awesome", "You are so wonderful", "What a marvel you are", "You're so lovely", "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES"];

let showAlert = name => alert(alerts[(Math.floor(Math.random()*alerts.length))]+`, ${name}!`);

showAlert("Manuel");


//6. Write an arrow function that returns the string, Hello, I am ${name}, and I am ${age} years old.

let saludo = (nombre,edad) => {return "Hello, I am "+nombre+", and I am "+edad+" years old"};

console.log(saludo("Manolo"),19);

//7. Write an arrow function that takes an array of integers, and returns the sum of the elements in the array. 
// Google and use the built-in reduce array method for this.

let sum = array => array.reduce((a,b) => a+b,0);
let array = [1,2,4,5,6,7];
console.log("La suma del array es: "+sum(array));

//8. The syntax of this function is wonky. Can you fix it to use the shortest 
// arrow function possible?

const fire = ( ) => {return `bulls-`;}

console.log(fire());

//9. Refactor the following ES5 function to use an arrow function

const fibonacci = n => (n < 3 ? 1 : fibonacci(n-1)+fibonacci(n-2));

console.log(fibonacci(6));

//Factorial
function factorial(n){
    for(let i = 1;i<n;i++){
        n *= i;
    }
    return n;
}

console.log(factorial(3));