//cargo todos los elementos de html que voy a necesitar------------------------------------------------------
let nombre = document.querySelector("#nombre");
let pass = document.querySelector("#pass");
let boton= document.querySelector("#boton");
let lista= document.querySelector("#lista");
let listaUsuarios=[];//este es el arereglo que contendrá la lista de usuarios

//creo la clase usuario
class Usuario{
    constructor(nombre,password){
        this.nombre=nombre;
        this.password=password;
    }    
}

//agrego el evento click al botón
boton.addEventListener("click",function(){    
    let user= new Usuario(nombre.value, pass.value);  //genero un nuevo objeto usuario a partir de la clase
    listaUsuarios.push(user)                              //agrego el usuario a la lista                  
    //--------------------------------------------
    let elemento = document.createElement("li");        //creo un elemento li
    elemento.innerText=user.nombre;                     //pongo el nombre del usuario en el elemento li
    lista.appendChild(elemento);                        //agrego el elemento li a la lista ol
    //-------------------------------------------------
    console.table(listaUsuarios);                       //mando el arreglo a la consola
})