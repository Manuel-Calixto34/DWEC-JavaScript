//Task 1
class Person{
    name;
    age;
    stomach = [];
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    eat(food){
        if(this.stomach.length > 10){
            console.log("Hay más de 10 elementos");
        }else
            this.stomach.push(food);
        return this.stomach;
    }

    poop(){
        this.stomach.length = 0;
        return this.stomach;
    }

    toString(){
        return this.name+ ", " + this.age; 
    }



}

let persona = new Person("Joker",18);

persona.eat("Macarrones");
persona.eat("Perejil");
persona.eat("Canelones");

console.log(persona.poop());

console.log(persona.toString());

//Task 2
class Car{
    model;
    milesPerGallon;
    tank = 0;
    odometer = 0;

    constructor(model,milesPerGallon){
        this.model = model;
        this.milesPerGallon = milesPerGallon;
    }

    fill(gallons){
        this.tank += gallons;
        return this.tank;
    }

    drive(distance){
        let maxDistance = this.tank * this.milesPerGallon;
        if(distance<maxDistance){
            this.odometer += distance;
            this.tank -= distance/this.milesPerGallon;
            return "He recorrido: "+ this.odometer + " y tengo en el tanque: "+ this.tank+" galones";
        }else
            this.odometer += maxDistance;
            this.tank = 0;
            return "Me quedé sin combustible";
    }
}

let coche = new Car("Toyota",20);

console.log(coche.fill(150));

console.log(coche.drive(200));

//Task 3
class Lambdasian{
    name;
    age;
    location;
    constructor(objeto)
    {
        this.name = objeto.name;
        this.age = objeto.age;
        this.location = objeto.location;
    }

    speak(){
        return "Hello my name is "+this.name+", I am from "+this.location+".";
    }
}

let lambdasian = new Lambdasian({
    name: "Manuel",
    age: 19,
    location: "Granada"
});

console.log(lambdasian.speak());

//Task 4

class Instructor extends Lambdasian{
    specialty;
    favLanguage;
    catchPhrase;
    constructor(objeto){
        super(objeto);
        this.specialty = objeto.specialty;
        this.favLanguage = objeto.favLanguage;
        this.catchPhrase = objeto.catchPhrase;
    }

    demo(subject){
        return "Today we are learning about "+subject;
    }

    grade(student,subject){
        return student.name + " receives a perfect score on "+subject;
    }
}

let profesor = new Instructor({
    name: "Carlos",
    age: 35,
    location: "Madrid",
    specialty: "si",
    favLanguage: "js",
    catchPhrase: "Don"
});

console.log(profesor.demo("PHP"));

//Task 5

class Student extends Lambdasian{
    previousBackground;
    className;
    favSubjects;
    grade = Math.floor(Math.random()*100);

    constructor({name, age, location,previousBackground,className,favSubjects}){
        super({name, age, location});
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = favSubjects;
    }

    listSubjects(){
        for(let i = 0;i<=this.favSubjects.length;i++){
            return this.favSubjects[i];
        }
    }

    PRAssigment(student,subject){
        return student.name+" has submitted a PR for "+subject;
    }

    sprintChallenge(student,subject){
        return student.name + " has begun sprint challewnge on "+subject;
    }

    graduate(Student){
        if(Student.grade > 70){
            console.log("Is ready to graduate, it´s got: "+Student.grade+"%");
        }else
            console.log("Not ready to graduate");
    }
}

let estudiante = new Student({
    name: "Pepe",
    age: 15,
    location: "Badajoz",
    previousBackground: "Si",
    className: "2ºB",
    favSubjects: ["mates","lengua"],
    grade: Math.floor(Math.random()*100)
});

console.log(profesor.grade(estudiante,"Mates"));
console.log(estudiante.listSubjects());
console.log(estudiante.PRAssigment("fisica"));
console.log(estudiante.sprintChallenge("quimica"));
console.log(estudiante.graduate(estudiante));

//Task 6

class ProjectManager extends Instructor{
    gradClassName;
    favInstructor;
    constructor({name,age,location,specialty,favLanguage,catchPhrase,gradClassName,favInstructor}){
        super({name,age,location,specialty,favLanguage,catchPhrase});
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor;
    }
    standUp(channel){
        return this.name+ "announces to "+channel+" standy times"; 
    }
    debugsCode(Student,subject){
        return this.name +" debugs"+ Student.name +"´s code on "+subject;
    }
}

