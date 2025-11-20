//Ejercicio 1
let vocales = 0;
function ejercicio1(cadena){
    for(let i=0;i<cadena.length;i++){
        if(cadena[i]=="a"||cadena[i]=="e"||cadena[i]=="i"||cadena[i]=="o"||cadena[i]=="u"){
            vocales++;
        }
    }
    return "La cadena "+cadena+" contiene "+vocales+" vocales";
}

console.log(ejercicio1("Javascript"));

//Ejercicio 2
function ejercicio2(numero){
    let resultado = "";
    for(let i = 0;i<=numero;i++){
        if(i % 3 == 0){
            resultado = "Div 3";
        }else if(i % 5 == 0){
            resultado = "Div 5";
        }else if(i % 3 == 0 && i % 5 == 0){
            resultado = "Div 3 + Div 5";
        }else
            resultado = i;
        console.log(resultado);
    }
    return resultado;
}

console.log(ejercicio2(10));

function ejercicio4(minutos){
    minutosCero = "00:00";
}

//Ejercicio 5
function ejercicio5(array){
    let fecha;
    let fecha_menor;
    let arrayMilisegundos = [];
    for(let i=0;i<array.length;i++){
        fecha = array[i];
        arrayMilisegundos.push(fecha.getTime);
    }
    fecha_menor = Math.min(...arrayMilisegundos);
    return fecha_menor;

}
let array = ["01/03/2016”,”02/05/2019”,”10/12/2008"];
console.log(ejercicio5(array));

//Ejercicio 6
function ejercicio6(inventario,categoria){
    let resultado = 0;
    for(let i=0;i<inventario.length;i++){
        if(categoria == inventario[i].categoria){
            resultado = categoria+": "+inventario[i].precio * inventario[i].stock 
        }else
             resultado = "Eléctronica: "+ inventario[0].precio * inventario[0].stock + " Hogar: "+ inventario[1].precio * inventario[1].stock + " Libros: "+ inventario[2].precio * inventario[2].stock;
    }
    return resultado;
}

const productos = [
    {id: 1, nombre: "Laptop Gamer",categoria: "Electrónica",precio: 1500,stock: 10},
    {id: 2, nombre: "Silla de Oficina Ergonómica",categoria: "Hogar",precio: 250, stock: 20},
    {id: 3, nombre: "Libro Clean Code",categoria: "Libros",precio: 45,stock: 50}
];

console.log(ejercicio6(productos,"Electrónica"));

//Ejercicio 7
class Cuenta{
    titular;
    saldo;
    constructor(titular,saldo){
        this.titular = titular;
        this.saldo = saldo;
    }

    sumarSaldo(numero){
        this.saldo += numero;
        return this.saldo;
    }

    restarSaldo(numero){
        let posible = false;
        let resultado = this.saldo - numero;
        if(resultado < 0){
            posible = false;
            console.log("No se ha podido realizar la operación");
        }else
            posible = true;
            this.saldo -= numero;
            
        return posible;
    }
}

class CuentaCorriente extends Cuenta{
    limitedeCredito;

    constructor(titular,saldo,limitedeCredito){
        super(titular,saldo);
        this.limitedeCredito = limitedeCredito;
    }

    retirarSaldo(){
        this.saldo -= this.limitedeCredito;
        return this.saldo;
    }
}

class CuentaAhorro extends Cuenta{
    interes;

    constructor(titular,saldo,interes){
        super(titular,saldo);
        this.interes = interes;
    }

    aplicarInteres(){
        let saldoConIntereses = this.saldo * this.interes;
        return saldoConIntereses;
    }
}
let cuentaAhorro = new CuentaAhorro("Manolo",1600,40);
console.log(cuentaAhorro.sumarSaldo(80));
console.log(cuentaAhorro.restarSaldo(1900));