class Libro {

    constructor(NombreDeLibro,Autor,Editorial,Genero){
        this.NombreDeLibro=NombreDeLibro;
        this.Autor=Autor;
        this.Editorial=Editorial;
        this.Genero=Genero;
    }


    MostrarLibro(){

    console.log("Nombre del libro: "+this.NombreDeLibro);
    console.log("Autor: "+this.Autor);
    console.log("Editorial: "+this.Editorial);
    console.log("Genero: "+this.Genero);

    }


}
    var Libro1 = new Libro("Cien años de soledad","Gabriel Garcia Marquez","Sudamericana","Novela Realismo Magic");
    var Libro2 = new Libro("El señor de los anillos", "J. R. R. Tolkien", "George Allen & Unwin", "Novela Fantasía heroica");
    var Libro3 = new Libro("1984", "George Orwell", "Debolsillo", "Novela Ciencia ficcion");

    Libro1.MostrarLibro()
    var libros = [Libro1,Libro2,Libro3];
    console.table(libros)
    
    function filtrarPorAutor(){
        let nombreAutor = prompt("Quieres saber que libro escribo:\n 1)Gabriel Garcia Marquez\n 2)J. R. R. Tolkien\n 3)George Orwell");
        if ( nombreAutor == "1"){
            console.log ("Escribio este libro " + libros[0].NombreDeLibro)
            filtrarPorAutor()
        
        } else if ( nombreAutor == "2"){
            console.log ("Escribio este libro " + libros[1].NombreDeLibro) 
            filtrarPorAutor()
        
        } else if ( nombreAutor == "3"){
            console.log ("Escribio este libro " + libros[2].NombreDeLibro) 
            filtrarPorAutor()
        }  
    }
filtrarPorAutor()

