$(document).ready(function () {
    console.log("Hola mundo");
});

//cargar el h1 con js
var titulo = document.querySelector("h1");
//cargar el h1 con jquery
var titulo2 =  $("h1");

var titulo3 = document.querySelector("#titulo1");
//cargar el h1 con jquery
var titulo4 =  $("#titulo1");
var parrafo1=$("p.estilo2");
var link=$("a[href=http://www.google.cl]");


//cargar solo el primer parrafo usando next
var primerParrafo = $("h1").next("p");

//cambiar el texto de titulo 1 con js
document.querySelector("h1").innerText="CAmbio de titutlo";
//lo mimso con jquery
$("h1").text("Cambio de titulo");

//para el estilo
document.querySelector("h1").style="color:red";
//con jquery
$("h1").css("color:red");