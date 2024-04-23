/**
 * PIZZERIA CADIF1
 * Articulos
 * -Nombre.
 * -Precio.
 * -Descripcion.
 * -Imagen.
 * 
 * Clientes
 * -CI.
 * -Nombre.
 * -Apellido.
 * -Direccion.
 * -Telefono.
 * 
 * Pedidos
 * -Cliente.
 * -Articulos.
 * -Fecha y hora.
 * -Monto a pagar por articulo y total.
 */

//Clase 1 Javascript 4  - Objetos (Object())

/**
 * Declaraciones de variables globales
 */
var articulos = [];
var articulosSeleccionados = [];
var cliente;

/**
 * Metodos globales
 */
function crearArticulo() {
  let auxArticulo = new Articulo(document.datosArticulo.nombre.value, document.datosArticulo.precio.value, document.datosArticulo.descripcion.value, document.datosArticulo.imagen.value);
  articulos.push(auxArticulo);

  console.log(articulos);
}

function agregarCliente() {
  cliente = new Cliente(document.datosCliente.cedulaCliente.value, document.datosCliente.nombreCliente.value, document.datosCliente.apellidoCliente.value, document.datosCliente.telefonoCliente.value, document.datosCliente.direccionCliente.value);
  console.log(cliente);
  console.log(document.datosCliente);
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
class Articulo{
  nombre = "";
  precio = 0;
  descripcion = "";
  imagen = "";

  constructor(name, price, desc, img){
    this.nombre = name;
    this.precio = price;
    this.descripcion = desc;
    this.imagen = img;
  }
}

class Cliente{
  constructor(ci, name, last, phone, addr){
    this.cedula = ci;
    this.nombre = name;
    this.apellido = last;
    this.telefono = phone;
    this.direccion = addr;
  }
}

class Pedido{
  constructor(client, articles, price){
    this.cliente = client,
    this.articulos = articles,
    this.fecha = new Date();
    this.precio = price;
  }

  getArticles(){
    for (const article of this.articulos) {
      console.log(`articulo: ${article}`);
    }
  }
  
}


