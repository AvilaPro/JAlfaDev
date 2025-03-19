var products;

//Manejo del renderizado de elementos en la pagina web
window.addEventListener("load", () => {
  let lista = document.getElementById("lista");
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
                    </div>
                  `

      }
    })
});