var a=0;
var b=[1,2,3];
var c={
    nombre:"dato",
    cantida:2,
    mostrar:function(){
        console.log(nombre);
    }
}
//c.mostrar();
//c.nombre;


console.log(a.__proto__);
console.log(b.__proto__);
console.log(c.__proto__);
//console.log(b.filter);


class D{
    constructor(num1,num2){
        this.num1=num1;
        this.num2=num2;
    }
    sumar=function(){
        return this.num1+this.num2;
    }
}
let d=new D(2,3);
console.log(c);
console.log(d);
//--------------------
//revisar clase D
console.log(typeof(D));

//-----------------------------------------------------
//funciones constructoras, representa una clase
function gato(nombre,raza,color){
    this.nombre=nombre;
    this.raza=raza;
    this.color=color;
    /*this.colores=["naranjo","negro","blanco","gris","cafe"];
    this.hablar=function(){
        console.log(nombre + " dice miau");
    }*/
}

//es lo mismo que
/*
class Gato{
    constructor(nombre,raza){
        this.nombre=nombre;
        this.raza=raza;
    }
}
*/

//modificar el prototypo
gato.prototype.colores=["naranjo","negro","blanco","gris","cafe"];

let gato1= new gato("neko","angora","negro");
let gato2=new gato("misifus","egipcio","blanco");
let gato3= new gato("mishi","angora","cafe");
//console.log(gato1.nombre);
//console.log(gato1);
//gato1.hablar();
console.table(gato1.colores);
console.table(gato2.colores);
console.table(gato3.colores);
//modificar el prototipo
gato1.colores.push("verde");
console.table(gato1.colores);
console.table(gato2.colores);
console.table(gato3.colores);

gato1.coloresAlternativos=gato1.colores.slice();
gato1.coloresAlternativos.push("azul");
console.table(gato1.coloresAlternativos)
console.table(gato2.colores);
console.log(gato1);

//console.log(gato2.nombre);
//console.log(gato2);

