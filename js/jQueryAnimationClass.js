//ready function jquery
var movies;
var page = 1;
$(function () {
  let $body = $("body");
  //referencia jquery del elemento con id characters
  let $characters = $("#characters");
  let cards = [];
  

  async function logMovies() {
    const response = await fetch("https://rickandmortyapi.com/api/character");

    movies = await response.json().then((movies) => {
      let chars = movies.results;
      console.log(chars);

      for (const char of chars) {
        cards += `<div class="card col-3">
            <img src="${char.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${char.name}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>`;
        $characters.html(cards);
      }
      console.log(movies);
    });
  }

  async function pedirMasChars() {
    page++;

    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);

    movies = await response.json().then((movies) => {
      console.log(movies);
      let chars = movies.results;
      console.log(chars);

      for (const char of chars) {
        cards += `<div class="card col-3">
            <img src="${char.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${char.name}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>`;
        $characters.html(cards);
      }
      console.log(movies);
    });
  }

  $(window).on("scroll", () => {
    var scrollHeight = $(document).height();
    var scrollPosition = $(window).height() + $(window).scrollTop();
    if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
        // alert("Ha llegado al final de la página");
        pedirMasChars();
    }
  })

  logMovies();

  //Animaciones de desaparecer o mover
  $("button.btn-primary").click(() => {
    $("div.bg-primary").fadeToggle("slow",()=>{
      alert("fade terminado");
    });
  })
  $("button.btn-success").click(() => {
    $("div.bg-success").slideToggle(()=>{
      alert("slide terminado");
    });
  })
  $("button.btn-info").click(() => {
    $("div.bg-info").animate({
      left: "-=50",
      top: "+=50"
    }, 5000, ()=>{
      alert("animacion terminada");
    });
  })
  $("button.btn-secondary").click(() => {
    $("div.bg-secondary").animate({
      top: "+=50",
      left: "-=50"
    }, 3000).fadeOut("slow",()=>{
      alert("encadenamiento terminado");
    });
  })
  $("button.btn-danger").click(()=>{
    $("div.bg-secondary").stop();
  })
});
