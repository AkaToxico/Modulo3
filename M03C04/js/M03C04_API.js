class Gato{   
    constructor(nombre, raza,colorOjos){
        this.nombre=nombre;
        this.raza=raza;
        this.colorOjos=colorOjos;
    }
}

//creamos dos objetos de tipo gato
let gato1=new Gato("neko","angora");
let gato2=new Gato("cat","egipcio");

//transformamos el gato 1 en un texto con formato JSON
let gatoJSON= JSON.stringify(gato1);
console.log(gato1);
console.log(gatoJSON);

//hacemos el proceso inverso, transformamos el texto JSON en un objeto
let gatoObj = JSON.parse(gatoJSON);
console.log(gatoObj);

//creamos un arreglo, lo transformamos en texto con formato JSON y lo enviamos a pantalla.
let arregloGatos=[gato1,gato2];
let arregloJSON=JSON.stringify(arregloGatos);
console.log(arregloJSON);
/*XML
<Gato>
    <nombre>neko</Nombre>
    <raza>angora</Angora>
</Gato>
Personalizado:
Clase=Gato
Objeto=(
    nombre="neko";
    raza="angora";
)
*/
//----------------------------------------------------------------------------------------------------------------------
console.log("-------------------------------------------------");
console.log("consulta a PI pokemon");
$.getJSON("https://pokeapi.co/api/v2/pokemon/478", function (data) {
        let pokemon=data;
        console.log(pokemon);
        //nombre
        console.log("nombre:" + pokemon.name);
        //numero (id)
        console.log("N°:" + pokemon.id);
        //tipos (types) [arreglo]
        for(i=0;i<pokemon.types.length;i++){
            console.log("tipos:" + pokemon.types[i].type.name);
        }
        //foto: front_default
        console.log("foto: " + pokemon.sprites.front_default);

    }
);
console.log("-------------------------------------------------");
console.log("consulta wheater");
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Valdivia&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es",    function(data) {
        console.log(data)
        console.log(data.main.temp)
})

$.getJSON("https://dog.ceo/api/breeds/image/random",function(data){
    console.log(data);
})
