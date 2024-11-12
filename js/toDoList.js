let ToDo;
$(document).ready(() => {
    //Agregar el manejador de evento del click del boton
    $("#btnToDo").on("click", () => {
        ToDo = $("#inputToDo").val();
        let textArea = $("<div></div>").addClass("w-50");
        textArea.append(ToDo)
        let btnsArea = $("<div></div>").addClass("w-50 d-flex justify-content-around");
        let auxBtnUpdate = $("<button></button>").addClass("btn btn-warning").append("<i class='bi bi-pencil-fill'></i>");
        let auxBtnDelete = $("<button></button>").addClass("btn btn-danger").append("<i class='bi bi-radioactive'></i>");
        btnsArea.append(auxBtnUpdate, auxBtnDelete);
        let auxLi = $("<li></li>").addClass("list-group-item d-flex").append(textArea, btnsArea);
        $("#list").append(auxLi);
        $("#inputToDo").val("");
        $("#inputToDo").focus();
    })
}) 