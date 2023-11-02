function validarInputText(input) {
  if (input.value == '') {
    // alert('El nombre es obligatorio');
    //remover la clase invalida al input
    input.classList.remove("is-valid");
    //agregar clase al input
    input.classList.add("is-invalid");
    input.focus();
    return true;
  } else {
    //remover la clase invalida al input
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    return false;
  }
}

function validarForm(form) {
  /**
   * validacion de los inputs type text
   */
  if (validarInputText(form.nombre)) {
    return false;
  }else{
    if (validarInputText(form.apellido)) {
      return false;
    }else{
      if (validarInputText(form.username)) {
        return false;
      }else{
        if (validarInputText(form.direccion)) {
          return false;
        }else{
          if (validarInputText(form.telefono)) {
            return false;
          }else{
            return true;
          }
        }
      }
    }
  }

}