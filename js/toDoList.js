let ToDo;
$(document).ready(() => {
    //Agregar el manejador de evento del click del boton
    $("#btnToDo").on("click", () => {
        ToDo = $("#inputToDo").val();
        let textArea = $("<div></div>").addClass("w-50");
        textArea.append(ToDo)
        let btnsArea = $("<div></div>").addClass("w-50 d-flex justify-content-around");
        let auxBtnUpdate = $("<button></button>").addClass("btn btn-warning").append("<i class='bi bi-pencil-fill'></i>").attr("onclick", "updateItem(this)");
        let auxBtnDelete = $("<button></button>").addClass("btn btn-danger").append("<i class='bi bi-radioactive'></i>").attr("onclick", "deleteItem(this)");
        btnsArea.append(auxBtnUpdate, auxBtnDelete);
        let auxLi = $("<li></li>").addClass("list-group-item d-flex").append(textArea, btnsArea);
        $("#list").append(auxLi).fadeIn(3000);
        $("#inputToDo").val("");
        $("#inputToDo").focus();
    })
})

function deleteItem(elem) {
    let auxLi = elem.parentNode.parentNode;
    $(auxLi).addClass("bg-danger");
    setTimeout(() => {
        if (confirm("Deseas eliminar este item de la lista?")) {
            $(auxLi).animate({
                top: -150,
                left: 150,
                width: '50%',
                height: '200%'
            }, 3000, () => {
                $(auxLi).removeClass("bg-danger");
                $(auxLi).html("<img height='150px' src='./img/fire.gif'>");
                $(auxLi).slideUp(4000, () => {
                    auxLi.parentNode.removeChild(auxLi);
                })
            });
            // $(auxLi).slideUp(3000);
        } else {
            $(auxLi).removeClass("bg-danger");
        }
    }, 500)
}

function updateItem(el) {
    let auxLi = el.parentNode.parentNode;
    $(auxLi).addClass("bg-warning");
    setTimeout(() => {
        if (confirm("Deseas actualizar este item?")) {
            let newValue = prompt(`Ingresa el nuevo valor (anterior: ${auxLi.childNodes[0].innerHTML})`);
            $(auxLi).slideUp(1500, () => {
                auxLi.childNodes[0].innerHTML = newValue;
            }).removeClass("bg-warning").slideDown(1500);
        } else {
            $(auxLi).removeClass("bg-warning");
        }
    }, 500)
}