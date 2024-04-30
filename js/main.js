/**
 * PIZZERIA CADIF1
 * Articulos
 * -Nombre.
 * -Precio.
 * -Descripcion.
 * -Imagen.
 * 
 * --Modelo de datos Cliente (No relacional)
 * Clientes
 * -CI.
 * -Nombre.
 * -Apellido.
 * -Direccion.
 * -Telefono.
 * -Contraseña.
 * 
 *  -En el modelo hemos creado una Clase para hacer el codigo Orientado a Objetos y mas modular.
 *  -La clase se llama "Cliente"
 * 
 * --CRUD Clientes
 *  Create: Cliente.agregarCliente()
 *  Read: console.log(clientes), validateClient(ci, pass)
 *  Update:
 *  Delete:
 * 
 * Pedidos
 * -Cliente.
 * -Articulos.
 * -Fecha y hora.
 * -Monto a pagar por articulo y total.
 */

//Clase 1 Javascript 4  - Objetos (Object())

/**
 * Datos de clientes (add en clase 2 cap 5)
 */
var clientes = [
  {
    "ci": 123456,
    "nombre": "John",
    "apellido": "Buren",
    "direccion": "Calle 1",
    "telefono": "123456789",
    "contraseña": "123456"
  },
  {
    "ci": 123457,
    "nombre": "John",
    "apellido": "McKinley",
    "direccion": "Calle 2",
    "telefono": "123456789",
    "contraseña": "123456"
  },
  {
    "ci": 123458,
    "nombre": "John",
    "apellido": "Jeferson",
    "direccion": "Calle 3",
    "telefono": "123456789",
    "contraseña": "123456"
  }
]
//Fin Datos clientes

/**
 * Declaraciones de variables globales
 */
var articulos = [];
var articulosSeleccionados = [];
var cliente;

/**
 * Metodos globales
 */
function verificarLoginUser() {
  if (localStorage.getItem("cliente")) {
    console.log("El usuario ya estaba logueado");
    document.getElementById("liLogin").style.display = "none";
  };
}

function crearArticulo() {
  let auxArticulo = new Articulo(document.datosArticulo.nombre.value, document.datosArticulo.precio.value, document.datosArticulo.descripcion.value, document.datosArticulo.imagen.value);
  articulos.push(auxArticulo);

  console.log(articulos);
}

// function agregarCliente() {
//   cliente = new Cliente(document.datosCliente.cedulaCliente.value, document.datosCliente.nombreCliente.value, document.datosCliente.apellidoCliente.value, document.datosCliente.telefonoCliente.value, document.datosCliente.direccionCliente.value, document.datosCliente.claveCliente.value);
//   console.log(cliente);
//   console.log(document.datosCliente);
// }

/**}
 * Funcion que busca a un cliente en el arreglo de clientes
 * Si existe validar la contrasena
 *  si no es la contraseña correcta indicarlo.
 * si no existe indicar que no existe
 * */
function validateClient(ci, pass) {
  for (let i = 0; i < clientes.length; i++) {
    if (clientes[i].ci == ci) {
      if (clientes[i].contraseña == pass) {
        //Cliente completamente valido
        //agregar al usuario su cedula a la cookie ci
        document.cookie = "ci=" + ci;
        //agregar el nombre tambien y que se venza a los 20 segundos
        var date = new Date();
        date.setTime(date.getTime() + 20000); // 20 seconds in milliseconds
        document.cookie = "nombre=" + clientes[i].nombre + "; expires=" + date.toUTCString();
        console.log(document.cookie);
        /**
         * Guardar al usuario (completo) en el local Storage
         */
        localStorage.setItem("cliente", JSON.stringify(clientes[i]));
        //ocultamos el boton de iniciar sesion
        document.getElementById("liLogin").style.display = "none";
        document.getElementById("liCloseLogin").style.display = "block";
      } else {
        //contraseña invalida
      }
    } else {
      //cliente no existe
    }
  }
}


function addArticle(e, id) {
  e.preventDefault();

  articulosSeleccionados.push(id);

  console.log(articulosSeleccionados);
}

function facturarCompra() {
  pedido.articulos = articulosSeleccionados;
  console.log(pedido);
}

/**Cap 1 */
//Creamos un objeto de ejemplo llamado pedido.
// let pedido = new Object();

//Agregamos los atributos del objeto segun nuestro modelo de datos
// pedido.cliente = "";
// pedido.articulos = "";
// pedido.fecha = "";
// pedido.monto = 0;

/**Cap 2 */
// function Cliente(ci, name, last, phone, addr) {
//   this.cedula = ci,
//   this.nombre = name,
//   this.apellido = last,
//   this.telefono = phone,
//   this.direccion = addr
// }



/**Cap 3 Clases */
class Articulo {
  nombre = "";
  precio = 0;
  descripcion = "";
  imagen = "";

  constructor(name, price, desc, img) {
    this.nombre = name;
    this.precio = price;
    this.descripcion = desc;
    this.imagen = img;
  }
}

class Cliente {
  constructor(cedula, name, last, phone, addr, pass) {
    this.ci = cedula;
    this.nombre = name;
    this.apellido = last;
    this.telefono = phone;
    this.direccion = addr;
    this.contraseña = pass;
  }

  //Metodos
  static agregarCliente() {
    cliente = new Cliente(document.datosCliente.cedulaCliente.value, document.datosCliente.nombreCliente.value, document.datosCliente.apellidoCliente.value, document.datosCliente.telefonoCliente.value, document.datosCliente.direccionCliente.value, document.datosCliente.claveCliente.value);
    let auxCliente = JSON.stringify(cliente);
    clientes.push(JSON.parse(auxCliente));
    console.log(cliente);
    console.log(clientes);
    console.log(document.datosCliente);
  }
}

class Pedido {
  constructor(client, articles, price) {
    this.cliente = client,
      this.articulos = articles,
      this.fecha = new Date();
    this.precio = price;
  }

  getArticles() {
    for (const article of this.articulos) {
      console.log(`articulo: ${article}`);
    }
  }

}


