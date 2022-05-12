/* var autoAlexis={
    motor : "2.0",
    puertas: 5,
    combustivle:"disel",
    sonido :function(){
            console.log("BRUM BRUM");
    } 
}

console.log(autoAlexis.combustible);
autoAlexis.sonido();

var autoSandra ={
    modelo : "tp",
    marca  : "peugeot",
    airbag : 2,
    combustible: "bencina",
    sonid: function(){
        console.log("brum brum");
    }
}

var autoGuillermo ={
    modelo: "demio",
    fabricante:"mazda",
    combustible:"bencina",
    sonido: function(){
        console.log("brum brum");
    }
}

var autoElectrico={
    modelo:"electrico1",
    marca:"tesla",
    combustible:"electrico",
    sonido:function(){
        console.log("tsssssssss");
    }
}
autoelectrico.puertas=5;
 */
//-------------------------------------------------CLASES-------------------------------------------------
class Auto{   
    constructor(marca,modelo,anio){
       this.marca=marca;
       this.modelo=modelo;
       this.anio=anio;
    }
}

let auto1 = new Auto("audi","TT",2003);
let auto2 = new Auto("mazda","3",2020);
let auto3= new Auto("mitsubishi","montero",2012);

console.log(auto1.marca);
console.log(auto2.marca);
console.log(auto3);

//ejercicio crear una clase que defina un rectangulo
class Rectangulo{
    constructor(largo, ancho){
        this.largo=largo;
        this.ancho=ancho;
    }
}
let fig1= new Rectangulo(2,5);
//crear una clase que defina un usuario
class Usuario{
    constructor(nombre,password){
        this.nombre=nombre;
        this.password=password;
    }
}

var usuario1 = new Usuario("juanito","123");
var usuario2 = new Usuario("pablito","333");
var rectangulo1 = new Rectangulo(5,3);

console.log("nombre del usuario (con punto): " + usuario1.nombre);
console.log("nombre del usuario (con corchete): " + usuario1["nombre"]);

//agregar una propiedad a un usuario
usuario1.activo=false;
console.log(usuario1);
console.log(usuario2);
//llamar a una propiedasd que no esté definida
console.log(usuario1.login);
//eliminar una propiedad
delete usuario1.activo;
console.log(usuario1);
delete usuario1.password;
console.log(usuario1);
console.log(usuario2);


//redefinir la clase rectangulo para que me entregue el area y el perímetro
/*
class Rectangulo{
    constructor(largo, ancho){
        this.largo=largo;
        this.ancho=ancho;
    }
}
*/
//esto esta mal definido*/
class rect{
    constructor(largo,ancho){
        this.largo=largo;
        this.ancho=ancho;        
        this.area=largo*ancho;
    }
}

var r1= new rect(10,20);
console.log(r1.area);
r1.ancho=30;
console.log(r1.area);
//----------------------------
//esto está bien definido
class Rectangulo2{    
    constructor(largo,ancho){
        this.largo=largo;
        this.ancho=ancho;        
    }
    area= function(){
        return this.largo*this.ancho;
    }
    perimetro=function (){
        return 2(this.largo+this.ancho);
    }
}

let rect1=new Rectangulo2(10,20);
console.log(rect1.area());
rect1.ancho=30;
console.log(rect1.area());

//crear un formulario de registro, y al lado (o abajo) crear una lista con los usuarios registrados.
//cada ves que se registra un usuario (en el formulario), se debe crear el objeto para este y
// agregarlo a la lista usuarios

