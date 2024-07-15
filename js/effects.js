$(document).ready(() => {
  $('#jqueryAlfa .btn-primary').click(() => {
    $('#jqueryAlfa .btn-success').toggle();
  });
  $('#jqueryAlfa .btn-success').click(() => {
    $('#jqueryAlfa .btn-primary').toggle();
  })
  /**
   * Logica para procesamiento de usuarios.
   */
  //Login
  $('#btnSubmitLogin').click(() => {
    //logica de verificacion de usuario
    //variable auxiliar para guardar el valor del input del formulario del login
    let emailInputLogin = $('#emailLogin').val();
    let emailExist = listaUsuarios.findIndex((obj) => {
      return obj.email == emailInputLogin;
    })
    console.log(`Indice del usuario: ${emailExist}`);
    if (emailExist != -1) {
      $('#saludoUser').html(`<h1>Bienvenid@ ${listaUsuarios[emailExist].name}`);
      $('#liLogin').css({
        'background-color': 'lightgreen',
      }).toggleClass('disabled')
      $('#liRegister').hide();
      $('#liLogout').toggle();
    }
  });
  //Register
  $('#btnSubmitRegister').click(() => {
    //logica de verificacion de usuario
    //variable auxiliar para guardar el valor del input del formulario del register
    var emailInputLogin = $('#emailLogin').val();
    let emailExist = listaUsuarios.findIndex((obj) => {
      return obj.email == emailInputLogin;
    })
    console.log(`Indice del usuario: ${emailExist}`);
    if (emailExist == -1) {
      let newUser = {
        name: $('#nameRegister').val(),
        email: $('#emailRegister').val(),
        password: $('#passwordRegister').val()
      }
      listaUsuarios.push(newUser);
      console.log(listaUsuarios);
      $('#saludoUser').html(`<h1>Bienvenid@ ${newUser.name}, has sido registrado.`);
      $('#liRegister').css({
        'background-color': 'lightblue',
      }).toggleClass('disabled')
      $('#liLogin').hide();
      $('#liLogout').toggle();
    }else{
      alert('El usuario ya existe, por favor ingrese otro email');
    }
  });
  //Logout
  $('#liLogout').click(() =>{
    $('#saludoUser').html('');
    $('#liLogin').show().css({
      'background': 'none',
    }).removeClass('disabled');
    $('#liRegister').show().css({
      'background': 'none',
    }).removeClass('disabled');
    $('#liLogout').hide();
  })
});