//Declaracion de variables globales
var articulos;
var cart;

$(document).ready(() => {
  fetch('https://fakestoreapi.com/products')
  .then((res) => res.json())
  .then((json) => {
    articulos = json;
    console.log(articulos);
  })
  .then(() => {
    for (const producto of articulos) {
      let card = `
        <div class="card col-12 col-sm-4 col-lg-3">
          <img src="${producto.image}" class="card-img-top" alt="..." style="max-height: 40vh">
          <div class="card-body">
            <h5 class="card-title">${producto.title}</h5>
            <p class="card-text">${producto.description}</p>
            <p class="text-small text-success">$ ${producto.price}</p>
            <a href="#" class="btn btn-success" onclick="addBuy(event, ${producto.id})">Comprar</a>
          </div>
        </div>
      `
      // $("#productos").append(card);
      document.getElementById("productos").innerHTML += card;
    }
  })
})

//Instanciacion del carrito de compras
// cart = new Object();

// cart.total;
//array de los ids de los productos seleccionados
// cart.productos;
//elemento que almacena las cantidades productos
// cart.cantidades;

// Crear la funcion constructora de Cart
// Crear un atributo de tipo array que a su vez tenga almacenado objetos seleccionados e inicialmente tenga asignado cantidad.
// function ProductoSeleccionado(id){
//   this.id = id;
//   this.cantidad = 1;
// }

// function Cart(params) {
//   this.productos = [];
// }

/**
 * Definir la clase Cart
 */
class ProductoSeleccionado{
  constructor(id){
    this.id = id;
    this.cantidad = 1;
  }
}
class Cart{
  constructor(){
    this.productos = [];
  }
}
//Instancia del carrito de compras
cart = new Cart();

//Funcion utilitaria para el agregar al carrito de compra.
function addBuy(el, id) {
  el.preventDefault();
  if (cart.productos.length > 0) {
    let auxP = new ProductoSeleccionado(id)
    let indiceBuscado = cart.productos.findIndex(product => product.id == auxP.id)
    console.log(indiceBuscado);
    if (indiceBuscado != -1) {
      cart.productos[indiceBuscado].cantidad += 1;
      console.log("actualizacion ", cart.productos);
    }else{
      let newBuy = new ProductoSeleccionado(id);
      cart.productos.push(newBuy);
      console.log(cart);
    }
  }else{
    let newBuy = new ProductoSeleccionado(id);
    cart.productos.push(newBuy);
    console.log(cart);
  }
}
