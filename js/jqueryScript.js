$(document).ready(() => {
    console.log("El documento está listo!!!");
    $('.card-body > a').click(function(event) {
        event.stopPropagation();
        event.preventDefault();
        $(this).hide();
        $(event.target.parentNode.children[1]).text("Comprado!!!").attr({
            style : 'color:green; font-weight:bold; font-size: 2em;'
        });
        $(event.target.parentNode.children[0]).css("color", "white");
        $(this).closest('.card').toggleClass("cardComprada");
        console.log(event);
        // $(this).closest('.card').hide(1000, () => {
        //     console.log("Se ha ocultado...");
        // });
        //$(event.target.parentNode.parentNode).hide(2000);
    });
    $('.card').click(function(e){
        e.stopPropagation();
        console.log("en la tarjeta");
        // console.log($(this));
        $(this).toggleClass("cardComprada");
        $(this.children[1].children[2]).show();
        $(this.children[1].children[0]).css("color", "black");
        $(this.children[1].children[1]).text("Informacion del producto").attr({style: "color: black;"});
    })
});