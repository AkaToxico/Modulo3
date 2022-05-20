//----------------------------------------------------------------------------
//https://pokeapi.co/api/v2/pokemon?limit=100&offset=0
//escribir los primeros 100 pokemon en pantalla con su tipo

async function cienPokemon(){
    let respuesta = await fetch("https://pokeapi.co/api/v2/pokemon?limit=800&offset=0");
    let datos     =  await respuesta.json();            
    console.log(datos);
    console.log("---------------------------------------------------------------")
    for(i=0;i<datos.results.length;i++){
        let texto = datos.results[i].name +": "; //guarda el nombre
        let url=datos.results[i].url;            //guarda la direccion para consultar los datos del pokemon
        //---------------------------------------------------------------------------
        let pokeRespuesta = await fetch(url);
        let pokeDatos=await pokeRespuesta.json();
        console.log(pokeDatos);
        //---------------------------------------------------------------------------        
        let img =pokeDatos.sprites.front_default;
        for(j=0;j<pokeDatos.types.length;j++){
            texto += pokeDatos.types[j].type.name +" ";
        }
        //---------------------------------------------------------------------------       
        let foto=document.createElement("img");
        foto.setAttribute("src",img);
        document.querySelector("div").appendChild(foto);
        /*
        let contenedor=document.querySelector("div");
        contenedor.appendChild(foto);
        */
        
        //console.log(texto);
    }

}

cienPokemon();