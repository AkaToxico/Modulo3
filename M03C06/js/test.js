//fetch con then
fetch("test.txt").then((data)=>console.log(data.text().then(d=>console.log(d)))).catch(console.log("errrrrror"));

//fetch con async
async function cargarDatos(ruta){
    var respuesta= await fetch("test.txt");
    var datos=await respuesta.text();
    console.log("async/await" + datos);
}


cargarDatos("test.txt");

//-----------------------------poke https://pokeapi.co/api/v2/pokemon/25

fetch("https://pokeapi.co/api/v2/pokemon/25").then(r=>r.json()).then(d=>{
    console.log("then");
    console.log(d);
}).catch(e=>console.log(e));

//----------------async await
async function getPoke(url){
    console.log("------------");
    r=await fetch(url);
    console.log("------------");
    d=await r.json();
    console.log("------------");
    console.log("async: ");
    console.log(d);
}
console.log("------------");
getPoke("https://pokeapi.co/api/v2/pokemon/25");


 


