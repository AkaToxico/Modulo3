let foto=document.querySelector("img");
//let foto2 = $("img");
let btn=document.querySelector("#boton");
//let btn=$("#boton");

console.log(foto);
//console.log(foto2);

console.log(btn);


//agregar click
btn.addEventListener("click",function(e){
    $.getJSON("https://dog.ceo/api/breeds/image/random",function(data){
        let obj=data;
        let URLimagen=data.message;
       
        foto.setAttribute("src",URLimagen);
    })
});

//crear una funcion que elija un número entero al azar entre 1 y 800
//usar esta función para buscar un pokemon al azar (por número)
//cuando se cargue, poner la información en el html, incluyendo la foto

//gatos
//https://api.thecatapi.com/v1/images/search

//let dirFinal="https://pokeapi.co/api/v2/pokemon/"+numeroRandom()
//getJson(dirFinal,funviot....


//paso 1.- crear la funcion para elegir un número al azar
function numeroRandom(valorMaximo){
    let numero=Math.floor(Math.random()*valorMaximo)+1;
    return numero;
}

//paso 2.- cargar elementos html
let imgPokemon= document.querySelector("#imgPokemon");
let nombrePokemon=document.querySelector("#nombrePokemon");
let tiposPokemon=document.querySelector("#tiposPokemon");
let botonPokemon=document.querySelector("#botonPokemon");

//paso3 .- agregar el evento click
botonPokemon.addEventListener("click",function(e){
    //paso 4:construir la url
    let n=numeroRandom(800);
    console.log(n);
    let url="https://pokeapi.co/api/v2/pokemon/" + n;
    //paso5: llamar al json
    $.getJSON(url,function (data) {
            nombrePokemon.innerText=data.id +":" +data.name;
            let tipos="";
            for (let i = 0; i < data.types.length; i++) {                
                tipos+=data.types[i].type.name +" ";
                console.log(data.types[i].type.name);
            }
            tiposPokemon.innerText=tipos;
            imgPokemon.setAttribute("src",data.sprites.front_default);
      })
})
