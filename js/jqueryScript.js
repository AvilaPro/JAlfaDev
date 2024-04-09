$(document).ready(() => {
  console.log("El documento está listo!!!");
  $('.card-body > a').click(function (event) {
    event.stopPropagation();
    event.preventDefault();
    $(this).hide();
    $(event.target.parentNode.children[1]).text("Comprado!!!").attr({
      style: 'color:green; font-weight:bold; font-size: 2em;'
    });
    $(event.target.parentNode.children[0]).css("color", "white");
    $(this).closest('.card').toggleClass("cardComprada");
    console.log(event);
    // $(this).closest('.card').hide(1000, () => {
    //     console.log("Se ha ocultado...");
    // });
    //$(event.target.parentNode.parentNode).hide(2000);
  });
  $('.card').click(function (e) {
    e.stopPropagation();
    console.log("en la tarjeta");
    // console.log($(this));
    $(this).toggleClass("cardComprada");
    $(this.children[1].children[2]).show();
    $(this.children[1].children[0]).css("color", "black");
    $(this.children[1].children[1]).text("Informacion del producto").attr({ style: "color: black;" });
  });

  //capitulo 13. 
  $("#btnAdd").click(function () {
    let auxtext = prompt("Ingrese el contenido del elemento nuevo");

    //hay varias maneras de hacer lo mismo
    let auxli = `<li class="list-group-item border p-3 rounded">${auxtext}</li>`;

    $("#list-group").append(auxli);
  });

  $("#list-group").on("dblclick", "li", function () {
    var confirmar = confirm("¿Desea eliminar este elemento de la lista?");
    if (confirmar) {
      $(this).remove();
    }
  })

  $("#btnFade").click(function () {
    $("#cardFade").fadeToggle(1000, () => {
      alert("Elemento oculto");
    });
  });
  $("#btnSlide").click(function () {
    $("#cardSlide").slideToggle(1000);
  });
  $("#btnAnimate").click(function () {
    $("#cardAnimate").animate({
      left: "250px",
      top: "-100px",
      height: "150px",
      width: "150px"
    }, 5000).css({
      "background": "red",
      "transition": "background 5s ease"
    });
  });
  $("#btnStop").click(function () {
    $("#cardAnimate").stop();
  });

});