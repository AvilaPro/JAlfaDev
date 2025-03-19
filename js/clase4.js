var products;
var filteredProducts;
var categories = [];

let lista = document.getElementById("lista");
let categorias = document.getElementById("categorias");

//Manejo del renderizado de elementos en la pagina web
window.addEventListener("load", () => {
  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      products = data;
    })
    .then(() => {
      for (const product of products) {
        lista.innerHTML += `
                    <div class="card">
                      <img src="${product.image}" class="card-img-top" alt="...">
                      <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text product-description text-truncate">${product.description}</p>
                        <span style="color: lightblue">${product.category}</span>
                        <a href="#" class="btn btn-primary buttonPrice">Comprar ${product.price}$</a>
                      </div>
                    </div>                  `
      }
      //Determinar las categorias de los productos.
      products.forEach((p) => {
        if (!categories.some((c) => c == p.category)) {
          categories.push(p.category);
        }
      });
      console.log(categories);
      for (const cat of categories) {
        categorias.innerHTML += `<option value="${cat}">${cat}</option>`;
      }
  });
});

categorias.onchange = function () {
  console.log(categorias);
  if (categorias.value != '') {
    filteredProducts = products.filter((p) => p.category == categorias.value);
    //Resetear la lista de productos
    lista.innerHTML = '';
    for (const product of filteredProducts) {
      lista.innerHTML += `
                  <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${product.title}</h5>
                      <p class="card-text product-description text-truncate">${product.description}</p>
                      <span style="color: lightblue">${product.category}</span>
                      <a href="#" class="btn btn-primary buttonPrice">Comprar ${product.price}$</a>
                    </div>
                  </div>                  `
    }
  }else{
    lista.innerHTML = '';
    for (const product of products) {
      lista.innerHTML += `
                  <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${product.title}</h5>
                      <p class="card-text product-description text-truncate">${product.description}</p>
                      <span style="color: lightblue">${product.category}</span>
                      <a href="#" class="btn btn-primary buttonPrice">Comprar ${product.price}$</a>
                    </div>
                  </div>                  `
    }
  }
}