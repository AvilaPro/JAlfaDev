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

function validarSelect(select) {
  console.log(select.value);
  if (select.value == '') {
    //remover la clase invalida al select
    select.classList.remove("is-valid");
    //agregar clase al select
    select.classList.add("is-invalid");
    select.focus();
    return true;
  }else{
    select.classList.remove("is-invalid");
    select.classList.add("is-valid");
    return false;
  }
}

function validarCheckbox(checkbox) {
  if (checkbox.checked == false) {
    //remover la clase invalida al select
    checkbox.classList.remove("is-valid");
    //agregar clase al select
    checkbox.classList.add("is-invalid");
    checkbox.focus();
    return true;
  }else{
    checkbox.classList.remove("is-invalid");
    checkbox.classList.add("is-valid");
    return false;
  }
}

function validarNumeroTelefonicoVzla(input) {
  expregtelf = /^[0-9]{4}-[0-9]{7}$/;
  if (expregtelf.test(input.value)) {
    //remover la clase invalida al input
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    input.focus();
    return true
  }else{
    //remover la clase invalida al input
    input.classList.remove("is-valid");
    //agregar clase al input
    input.classList.add("is-invalid");
    return false;
  }
}
function validarTextos(input) {
  expregtexto = /^([a-zA-Z0-9 ]+){1,20}$/;
  if (expregtexto.test(input.value)) {
    //remover la clase invalida al input
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    input.focus();
    return true
  }else{
    //remover la clase invalida al input
    input.classList.remove("is-valid");
    //agregar clase al input
    input.classList.add("is-invalid");
    return false;
  }
  
}

function validarForm(form,e) {
// e.preventDefault();
  
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
            if (validarSelect(form.ciudad)) {
              return false;
            }else{
              if (validarCheckbox(form.terminos)) {
                return false;
              }else{
                if (!validarNumeroTelefonicoVzla(form.telefono)) {
                  return false
                }else{
                  if (!validarTextos(form.direccion)) {
                    return false;
                  }else{
                    return true;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

}