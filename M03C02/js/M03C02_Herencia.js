//trabajo con arreglos
let plantas = ['ruda','oregano','cilantro','perejil','tomate'];
console.table(plantas);
//1.- eliminar  una planta al final
plantas.pop()
console.table(plantas);
//2.- eliminar una planta al principio
plantas.shift();
console.table(plantas);
//3.- agregar una planta al final
plantas.push("menta");
console.table(plantas);
//4.- eliminar la planta que se llama cilantro
plantas.splice(1,1);
console.table(plantas);
//5.- alternativa a elimnar el cilantro, sin saber su posicion
plantas = ['ruda','oregano','cilantro','perejil','tomate'];
console.table(plantas);

//recorror elemento por elemento
//y si el elemento no es cilantrol, lo copio en el nuevo arreglo
var plantas2=[];
for(i=0;i<plantas.length;i++){
    if(plantas[i]!="cilantro"){
        plantas2.push(plantas[i]);
    }
}
console.table(plantas2);
//crear una función generica que funcione con cualquier arreglo
function eliminarElemento(arreglo,elemento){
    var resultado=[];
    for(i=0;i<arreglo.length;i++){
        //console.log(arreglo[i],elemento);
        if(arreglo[i]!=elemento){
            resultado.push(arreglo[i]);
        }
    }
    return resultado;
}
var plantas3= eliminarElemento(plantas,"perejil");
console.table(plantas3);

var autos=["audi","mercedes","toyota","dodge"];
console.table(autos);
var autos2=eliminarElemento(autos,"toyota");
console.table(autos2);


//-----------------------------------------------------
//función filter
var numeros=[1,2,3,4,5];
//quiero los numeros que sean distintos a 3
var numeros2 = numeros.filter(function(numero){ 
    return numero!=3;
});
console.log(numeros2);
//obtener los numeros mayores a 3
var numeros3 = numeros.filter(function(n){
    return n>3
});
console.log(numeros3);
//obtener los numeros pares
var numeros4 = numeros.filter(function(n){
    return n%2==0;
})
console.log(numeros4);
//lo mismo pero mas corto
numeros4 = numeros.filter(n=>n%2==0);
console.log(numeros4);
//--------------------------------------------------------------------------
plantas = ['ruda','oregano','cilantro','perejil','tomate'];
//elimnar la planta que se llame perejil
var p1 =  plantas.filter(function(p){
    return p != 'perejil'
})
console.table(p1);
//elimnar las plantas que empiecen con "p"
//var planta002 = plantas.filter(n=>n[0]!="p");
var p2=plantas.filter(function(planta){
    return planta[0]!='p';
})
console.table(p2);

//elimnar las plantas que terminen con "o"
//var p3=plantas.filter(e=>e.slice(-1)!=="o");
var p3=plantas.filter(function(p){
    return p[p.length-1]!="o";
})
console.table(p3);

//var p4=plantas.filter(e=>e.slice(-1)!=="o");
//console.table(p4);
//----------------------------------------
//Dates
//----------------------------------------
var fecha = new Date(); //nos entrega la fecha actual
console.log(fecha); 
var anio=fecha.getFullYear();
console.log("año:"+ anio);

var hoy=new Date(2022,10); //definimos nostros una fecha (obligatoriamente:; año y mes, opcional: dia, hora,min,seg,ms)
console.log(hoy);
//pedir el año de nacimiento y entrgue la edad actual 
var anioNacimiento = prompt("ingrese su año de nacimiento");
var edad = fecha.getFullYear()-anioNacimiento;
alert("su edad es: " + edad);

//otras funciones:
console.log("-------------------------")
console.log(fecha.getDate());
console.log(fecha.getDay());
console.log(fecha.getMonth());
console.log(fecha.toDateString());
console.log(fecha.toTimeString());

//------------------------------------------------------------------------------------
class Usuario{   
    constructor(nombre,password){
        this.nombre=nombre;
        this.password=password;
    }
     ingresar=function(){
         console.log("Bienvenido " + this.nombre);
     }
     salir=function(){
        console.log("Adios " + this.nombre);
     }  
}

var usuario1=new Usuario("Alexis","123");
var usuario2=new Usuario("Paula","345");
var usuario3=new Usuario("Clemente","098");

var arregloUsuarios = [usuario1,usuario2,usuario3];
console.log("el nombre del usuario es:" + usuario1.nombre);
usuario1.ingresar();
console.log("el nombre del usuario es:" + arregloUsuarios[1].nombre)
//------------------------------------------------------------------------
//clase que hereda todas las propiedades y funcionamiento
//desde la clase Usuario
class Administrador extends Usuario{
    constructor(nombre,password,sistema){
        super(nombre, password);
        this.sistema=sistema;
    }
    eliminarUsuario=function(nombre){
        arregloUsuarios = arregloUsuarios.filter(function(u){
            return u.nombre!=nombre;
        })
    }
    ingresar=function(){        
        console.log("Bienvenido administrador " + this.nombre);
    }
    ingresar=function(mensaje){
        console.log(mensaje + this.nombre);
    }
}

//creo un adminsitrador
var adm1=new Administrador("Denis","12345","windows");
//llamo a la propiedad nombre, que administrador hereda de usuario
console.log("El nombre del adminsitrador es:" + adm1.nombre);
console.log("El sistema dministrado es: " + adm1.sistema);
//llamo a la función  ingresar que está definida en usuario
//pero que adminitrador hereda
adm1.ingresar();
adm1.ingresar("hola ");
adm1.salir();

//------------------------------------------------------------------------
//crear una clase llamada figura geometrica, con todos los lados iguales
//propiedades: numero de lados
//largo del lado
//funcion perimetro


//derivar y heredar, gnerar triangulo y cuadrado, 
//donde se defina como fijo el numero lados y se agregue la funcion area
class Figura{
    constructor(cantidadLados, medida){
        this.cantidadLados=cantidadLados;
        this.medida=medida;
    }
    perimetro = function(){
        return this.cantidadLados*this.medida;
    }
}
//--------------------------------------------------------------------------
class Cuadrado extends Figura{
    constructor(medida){
        super(4,medida);
    }
    area=function(){
        return this.medida*this.medida;
    }
}
//--------------------------------------------------------------------------
class Triangulo extends Figura{
    constructor(medida){
        super(3,medida);
    }
    area=function(){
        let h =Math.sqrt( Math.pow(this.medida,2) - Math.pow(this.medida/2,2));
        return (h*this.medida)/2;
    }
}


var cuadrado1=  new Cuadrado(3);
console.log(cuadrado1.area());
console.log(cuadrado1.perimetro);
var traingulo1= new Triangulo(3);
console.log(traingulo1.area());
console.log(traingulo1.perimetro());



