
//https://dog.ceo/api/breeds/list/all
async function buscarRazas(){
    //consultamos la API y obtenemos una respuesta
    let respuesta = await fetch("https://dog.ceo/api/breeds/list/all");
    //console.log(respuesta);    
    //filtrar la respuesta para obtener sólo los datos que necesitamos
    let datos     = await respuesta.json();
    //console.log(datos);
    //obtener nodo html para insertar lista de razas de perro
    let lista = document.querySelector("ul");
    //recorrer las propiedades del objeto message (que contiene las razas)
    for(r in datos.message){
        //hacer algo, obteniendo los nombres de las propiedades
        //console.log(r);
        //creo un nuevo elemento de lista
        let elemento=document.createElement("li");
        //le cambio el texto por el que corresponde a la raza (nombre de la propiedad)
        elemento.innerText = r;
        //agregar comportamiento (evento click), el callback es asincrono proque hay un await dentro
        elemento.addEventListener("click",async function(e){
            //cargo el contenedor html de la foto
            let foto= document.querySelector("img");
            //console.log(this.innerText);
            //cargo la direccion de la foto, usando la otra funcion creada (como es asincrona debo usar await)
            let urlFoto =  await buscarImgPorRaza(this.innerText);            
            //cambio el atributo
            foto.setAttribute("src",urlFoto);
        })
        //agregar el elemento creado a la lista html que se cargó
        lista.appendChild(elemento);          
        //para obtener valores
        //console.log(datos.message[r]);
    }
}

//https://dog.ceo/api/breed/ +raza + /images/random
//esta función busca una foto al azar por raza enla API y la devuelve como texto
async function buscarImgPorRaza(raza){
    //se construye la url para buscarla con la raza pasada como parámetro
    let url="https://dog.ceo/api/breed/" +raza + "/images/random";
    //consultaa la API con la url reciénc reada
    let respuesta = await fetch(url);
    //obtengo los datos
    let datos = await respuesta.json();
    //console.log(datos);
    //retorno el valor
    return datos.message;
}

//ejecución
buscarRazas();