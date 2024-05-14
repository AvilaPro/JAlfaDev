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

/**
 * clase 3 - Codigo Asincrono
 */
let btnSwal = document.getElementById('centro-boton');
btnSwal.addEventListener('click', () => {
  console.log("click en el btnSwal");
  Swal.fire("SweetAlert2 is working!");
})

/**
 * Practica cap 9
 * Programar en el body en evento load (onload, addEventListener('load')) que se muestre un alert "clasico" de js. Y luego sustituir por un sweetAlert y compare los comportamientos.
 */

/**
 * Practica cap 10 - setTimeout
 * Programar que al cargar la pagina (body), se inicie un contador de tiempo o "contador de sesion", en donde se le indique al usuario que en 10 segundos se le cerrará la sesión.
 * Al cabo de 5 segundos debe ejecutar un sweetAlert que indique que quedan 5 segundos y que si desea mantener la sesion abierta debe indicarlo al presionar un boton en el sweetAlert.
 * Sino desea continuar se debe cerrar el sweetAlert y se debe mostrar en la pagina que se cerro la sesion (alert, innerHTML, jQuery, SweetAlert).
 */

class AlertaSuave{
  constructor(){}
  //metodos estaticos no pueden ser usados por las instancias
  static mostrarSuave(){
    alert("muestro suave");
  }
}

let sessionTimer
function enderSession() {
  // limpiarIntervalo();
  sessionTimer = setInterval(() => {
    alert('se ha cerrado la sesion')
  }, 10000);
}

function limpiarIntervalo() {
  setTimeout(() => {
    Swal.fire({
      title: "Deseas continuar con la sesion?",
      text: "En caso contrario se cerrará!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "mantenerla!",
      timer: 4900,
      timerProgressBar: true
    }).then((result) => {
      if (result.isConfirmed) {
        clearInterval(sessionTimer);
        enderSession();
        Swal.fire({
          title: "Se mantiene!",
          text: "Tu sesion se mantiene abierta.",
          icon: "success"
        });
      }else{
        limpiarIntervalo()
      }
    });
  }, 5000)
}












/**
 * Clase 4 - Fecha y hora
*/
let pFecha = document.getElementById("fecha");
let dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
let meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
var fecha = new Date();

var textoFecha = `Hoy es ${dias[fecha.getDay()]} ${fecha.getDate()} de ${meses[fecha.getMonth()]} del ${fecha.getFullYear()}`;

pFecha.innerHTML = textoFecha;

setInterval(() => {
  let hora = new Date();
  let textoHora = `, la hora actual es ${hora.getHours().toString().padStart(2, '0')}:${hora.getMinutes().toString().padStart(2, '0')}:${hora.getSeconds().toString().padStart(2, '0')}`
  pFecha.innerHTML = textoFecha + textoHora;
}, 1000)

/**
 * Trabajando con promesas
 */
let usuarios;
console.log(usuarios);

fetch('https://jsonplaceholder.typicode.com/users')
.then(re => re.json())
.then(datos => {
  usuarios = datos;
  console.log(usuarios)
});
