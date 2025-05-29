/*
Definir un Objeto Libro:

Debe tener propiedades como titulo, autor, isbn y disponible (un booleano que indica si el libro está prestado o no).
Crea este objeto usando la sintaxis literal de objeto inicialmente, para un par de libros de ejemplo.
*/

//Instanciamos el objeto
let b = new Object();

//Declaramos los atributos del objeto.
b.titulo = "JS para Dummies";
b.autor = "Eduardo Mejias";
b.anio = 2025;
b.isbn = "7-8457-2210";
b.stock = 200;

console.log(b);

/*
Crear una Función Constructora Libro:

Transforma el objeto Libro en una función constructora para que puedas crear múltiples instancias de libros de manera más eficiente.
Añade un método a esta función constructora (usando prototype) llamado prestar(). Este método debe cambiar el estado disponible a false si el libro está disponible, y mostrar un mensaje apropiado.
Añade otro método devolver(). Este método debe cambiar disponible a true y mostrar un mensaje.
*/

function Libro(titulo, autor, anio, isbn, stock) {
    this.titulo = titulo;
    this.autor = autor;
    this.anio = anio;
    this.isbn = isbn;
    this.stock = stock;

    this.informarDisponilidad = () => {
        if (this.stock > 0) {
            alert(`Hay disponibles del libro ${this.titulo}`);
        } else {
            alert(`No hay disponibles del libro ${this.titulo}`);
        }
    }

    this.prestar = () => {
        console.log("Hay ", this.stock, " libros de ", this.titulo);
        if (this.stock > 0) {
            this.stock--;
            console.log("Quedan ", this.stock, " libros de ", this.titulo);
            return true;
        } else {
            return false;
        }
    }

    this.devolver = () => {
        this.stock++;
        console.log("Quedan ", this.stock, " libros de ", this.titulo);
    }
}

//Instanciamos libros de la Constructora

let l1 = new Libro("Libro 1", "Autor 1", 2000, 1, 20);
let l2 = new Libro("Libro 2", "Autor 2", 2000, 2, 0);

let libros = [];

libros.push(l1);
libros.push(l2);

console.log(libros);

/**
 * Definimos la clase Usuario
 */
class Usuario {
    //Atributos de la Clase
    cedula = '';
    nombre = '';
    libros = [];

    //Funcion constructora de la clase
    constructor(ci, name) {
        this.cedula = ci;
        this.nombre = name;
    }

    //Metodos de la clase
    solicitarLibro(book, arrayBooks) {
        if (this.libros.some(l => l.isbn == book.isbn)) {
            alert("Ya tienes el libro registrado");
        } else {
            if (book.stock > 0) {
                this.libros.push(book);
                let idxLibro = arrayBooks.indexOf(book);
                if (idxLibro != -1) {
                    arrayBooks[idxLibro].stock--;
                }
            } else {
                alert("No hay stock de ese libro");
            }
        }
    }

    devolverLibro(book, arrayBooks) {
        let idxLibro = arrayBooks.indexOf(book);
        let idxLibroUser = this.libros.indexOf(book);
        if (idxLibro != -1) {
            arrayBooks[idxLibro].stock++;
        }
        if (idxLibroUser != -1) {
            this.libros.splice(idxLibroUser, 1);
        }
    }
}


//Instanciar un usuario
let e = new Usuario(123, "Eduardo");
