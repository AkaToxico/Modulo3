//JavaScript Avanzado - Ejercicio asincrónico 02
//En este ejercicio, deberá crear un programa que use el Objeto Date() para
//devolver un alert que exprese qué día de la semana es.
//Importante: Debe existir una respuesta por cada valor numérico que pueda llegar.
//Requisito: El alert debe devolver un String.

var Dias=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];

function HoyEs(){
    
    let FechaActual = new Date();
    let DiaSemana = FechaActual.getDay();
    let Hoy = Dias 
    return Hoy [DiaSemana]

} 
alert("Hoy es " + HoyEs());