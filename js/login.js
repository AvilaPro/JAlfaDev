let inputsArray = ["usernameInput", "passwordInput"];

$(document).ready(() => {
    //Aqui todo el codigo de jQuery...
    $('#welcome').hide();

    //Manejador del click del btn del formulario
    $("#loginForm > button").click(() => {
        for (const input of inputsArray) {
            if ($(`#${input}`).val() == "") {
                $(`#${input}`).addClass("inputEdge");
                $(`#${input} + span`).show();
                return;
            } else {
                $(`#${input}`).removeClass("inputEdge");
                $(`#${input} + span`).hide();
            }
        }
        //leer el valor del input
        let username = $("#usernameInput").val();
        //agregar el valor del input al span "userSpan"
        $("#userSpan").text(username);
        //cambiar el aspecto de #welcome con el uso de attr.
        $("#welcome").attr({
            style: "color: red"
        });
        //Agregar clase de animacion a #welcome
        $("#welcome").addClass("wobble-top-animation text-center");
        $('#welcome').show();
        $("#loginForm").hide();

    })
    //Manejador de evento click en el boton interior de #welcome para
    //iterar la animacion
    $("#welcome button").click(() => {
        $("#welcome").toggleClass("wobble-top-animation");
    })

})