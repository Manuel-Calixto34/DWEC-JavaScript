class Animal{
    name = "Garfield";
    type = "cat";

    hablar(){
        return "Me encantan los lunes"
    }

    constructor(nombre){
        this.name = nombre;
    }
}

let pato = new Animal("Antonio");
console.log(pato.hablar());

class Persona{
    nombre;
    apellido1;
    apellido2;

    constructor(nombre,apellido1,apellido2){
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = this.apellido2;

    }

    getNombreCompleto(){
        return this.nombre + " " + this.apellido1 + " " + this.apellido2;
    }
}

jose = new Persona("Manuel", "Calixto","Piñar");