
class Gato{        
    constructor(nombre,raza){
        this.nombre=nombre;
        this.raza=raza;
    }
    saludar =function(){
        console.log("hola " + this.nombre);
    }
    saludarv2=function(saludo){
        console.log(saludo +" " + this.nombre);
    }
    saludarv3=function(saludo,despedida){
        console.log(saludo +" " + this.nombre);
        console.log(despedida +" " + this.nombre);
    }
}

let gato1=new Gato("neko","angora");

gato1.nombre;
gato1.saludar();
gato1.saludarv2("que tal");
this.nombre;

//----------------------------------------------------------


let perro={
    nombre:"cachupin",
    raza:"terrier"
}
//bind
let funcionPrestada = gato1.saludar.bind(perro);
funcionPrestada();
//call
gato1.saludar.call(perro);
//call v2
gato1.saludarv2.call(perro,"buenas tardes");
//callv3
gato1.saludarv3.call(perro,"buenas tardes","nos vemos");
//apply
gato1.saludarv2.apply(perro,["buenas que tal"]);
//applyv3
gato1.saludarv3.apply(perro,["buenas que tal","chao"]);


//-------------------------------------------

function saludar(nombre){
    return function(saludo){
        console.log(saludo + " "+ nombre);
    }
}

let f = saludar("Denis");
f("hola");