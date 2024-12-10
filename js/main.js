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
class ProductoSeleccionado {
  constructor(id) {
    this.id = id;
    this.cantidad = 1;
  }
}
class Cart {
  constructor() {
    this.productos = [];
  }
}
//Instancia del carrito de compras
if (localStorage.getItem("cart") != undefined) {
  //se crea cart alimentado de lo almacenado en el localstorage
  var cart = JSON.parse(localStorage.getItem("cart"))
} else {
  //Se crea una nueva instancia solo si no existe en el localstorage
  cart = new Cart();
}

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
    } else {
      let newBuy = new ProductoSeleccionado(id);
      cart.productos.push(newBuy);
      console.log(cart);
    }
  } else {
    let newBuy = new ProductoSeleccionado(id);
    cart.productos.push(newBuy);
    console.log(cart);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
}

function mostrarCart() {
  $("#modalBody").text("");
  let articulosSeleccionados = [];
  for (const seleccionados of cart.productos) {
    let seleccionado = articulos.find((articulo) => articulo.id == seleccionados.id);
    articulosSeleccionados.push(seleccionado);
  }
  console.log(articulosSeleccionados);
  for (let i = 0; i < articulosSeleccionados.length; i++) {
    let tr = `
      <tr>
        <th scope="row">${i + 1}</th>
        <td>${articulosSeleccionados[i].title}</td>
        <td>${articulosSeleccionados[i].price}</td>
        <td>${cart.productos[i].cantidad}</td>
      </tr>
    `;
    $("#modalBody").append(tr);
  }
}

document.cookie = "username=jose; expires=Thu, 01 Jan 2025 00:00:00 UTC;";

console.log(document.cookie);

// Variable del modal publicitario
const myModal = new bootstrap.Modal(document.getElementById('modalBanner'));

setTimeout(() => {
  myModal.show()
}, 3000)

function closeBanner() {
  Swal.fire({
    title: "Te perderas esta oferta?",
    text: "Aprovecha el 50% de descuento!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si quiero aprovecharlo!"
  }).then((result) => {
    console.log(result);
    if (result.isConfirmed) {
      Swal.fire({
        title: "Excelente!",
        text: "El cupon se ha agregado a tu cuenta",
        icon: "success"
      });
      myModal.hide();
    } else {
      myModal.hide();
    }
  });
}

//Temporizador de control de sesion
let temporizador;
function iniciarTemporizador() {
  temporizador = window.setTimeout('intentarCerrarSesion()', 7000);
}
iniciarTemporizador();

function intentarCerrarSesion() {
  let timerInterval;
  Swal.fire({
    title: "Deseas mantener la sesion?",
    html: "Se cerrará en <b></b> millisegundos.",
    timer: 5000,
    timerProgressBar: true,
    cancelButtonColor: "#32e11a",
    cancelButtonText: "Mantener Sesion",
    showCancelButton: true,
    didOpen: () => {
      Swal.showLoading();
      const timer = Swal.getPopup().querySelector("b");
      timerInterval = setInterval(() => {
        timer.textContent = `${Swal.getTimerLeft()}`;
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    }
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
      cerrarSesion();
    }
    if (result.dismiss === Swal.DismissReason.cancel) {
      reiniciarTemporizador();
    }
  });
}

function cerrarSesion() {
  clearTimeout(temporizador);
  alert("Sesion cerrada");
}

function reiniciarTemporizador() {
  clearTimeout(temporizador);
  iniciarTemporizador();
}

let dias = [
  "domingo",
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado"
]

let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
let fechaActual = new Date();
setInterval(() => {
  fechaActual = new Date();
  let seconds = fechaActual.getSeconds();
  seconds = seconds.toString().padStart(2, "0");
  document.getElementById("hora").innerText = `${fechaActual.getHours()}:${fechaActual.getMinutes()}:${seconds}`;
}, 1000);

console.log(fechaActual);

let fechaFormateada = `Barquisimeto, ${dias[fechaActual.getDay()]} ${fechaActual.getDate()} de ${meses[fechaActual.getMonth()]} del ${fechaActual.getFullYear()}  `

document.getElementById("fechaActual").innerHTML = fechaFormateada;

let usuarios;


fetch('https://jsonplaceholder.typicode.com/todos')
  .then(res => res.json()
  ).then(data => {
    console.log(data);
  }
  );

  fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => console.log(json))

let miPromesa = new Promise((resolve, rejected) => {
  if (confirm("Aceptas")) {
    resolve("Has aceptado");
  }else{
    rejected("Has rechazado");
  }
});

miPromesa.then((r) => {
  console.log(r)
}).catch((z) => {
  console.log(z)
})

