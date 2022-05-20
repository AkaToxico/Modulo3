//ejercicio API Countries 2
/* $.getJSON("https://restcountries.com/v3.1/name/cuba",function(data){
    console.log(data);
    console.log("-----------------------------");
    console.log("nombre: " + data[0].name.official);
    console.log("capital: " + data[0].capital[0]);
   
    let lenguajes="";
    for(l in data[0].languages){
        lenguajes +=" " + data[0].languages[l]
    }
    console.log("********");
    console.log("lenguajes: " + lenguajes);

    let moneda=data[0].currencies;
    for(m in moneda){
        console.log("moneda:" + moneda[m].name) ;
    }
    
}) */

//-------------------------------------------------------------
//callbacks
function saludar(nombre){
    console.log("Hola " + nombre);
}

function despedir(nombre){
    console.log("Chao " + nombre);
}

function ejecutar(funcionCallback){ //f de función
    let persona="Pedro";
    funcionCallback(persona);
}
/* ejecutar */

ejecutar(saludar);
ejecutar(despedir);

var  a  =  saludar;
a("Denis");
a;

//-----------------------------------------------------------------
//promesas
let numero="rtrt";
console.log(numero);
if(numero){    
    console.log("existe");
}else{
    console.log("no existe");
}

//construir una promesa
function sumar(x,y) {
    var promesa = new Promise(function(resolve,reject){
            if (x==undefined || y==undefined){
                reject("Error: falta un número");
            }else{
                resolve(x+y);
            }            
    });
    return promesa;
}
//then: es una función que se usa para obtener promesas (then)
sumar(10,20).then(function(data){
    console.log(data);
})
//declaro variables para haecr el llamado en ves de pasa directamente número por los parámetros
let numero1=10;  
let numero2;

sumar(numero1,numero2).then(function(data){
    console.log(data);
}).catch(function(e){ //e de error
    console.log(e);
})
//-------------------------------------------
//leer archivo txt
fetch("test.txt").then(function(data){
    console.log(data);
    data.text().then(function(data2){
        console.log(data2);
    })
})
//lo mismo pero abreviado
//fetch("test.txt").then(d=>d.text().then(t=>console.log(t))).catch(err=>console.log(err));

//haremos lo mismo perousando async await

async function leerDatos(){
      let datos = await fetch("test.txt");      
      console.log(datos);
      let texto = await datos.text();
      console.log(texto);
}

leerDatos();
//----------------------------------------------
//leer desde api perrito
//https://dog.ceo/api/breeds/image/random

/* $.getJSON("https://dog.ceo/api/breeds/image/random",function(data){
    console.log(data);
}) */
//---------------------------------------------------------------------------
async function leerPerros(){
    let data = await fetch("https://dog.ceo/api/breeds/image/random");
    console.log(data);
    let datos = await data.json();
    console.log(datos);
}

leerPerros();

//----------------------------------------------------------------------------
//lo mismo con un then
fetch("https://dog.ceo/api/breeds/image/random").then(function(data){
    console.log(data);
    data.json().then(function(datos){
        console.log(datos);
    })
})
//----------------------------------------------------------------------------
//pokemon //https://pokeapi.co/api/v2/pokemon/151

async function obtenerPokemon(numero){
    let respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/"+numero);
    let datos=await respuesta.json();
    console.log(datos);
}

obtenerPokemon(101);


