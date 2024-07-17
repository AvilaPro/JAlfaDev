let personajes;
fetch("https://rickandmortyapi.com/api/character").
then(res => res.json()).
then(data => {
  console.log(data.results);
  personajes = data.results;
  for (const personaje of personajes) {
    $('#personajes').append(`
      <div class="card col-3">
      <img src="${personaje.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${personaje.name}</h5>
        <p class="card-text">Specie: ${personaje.species}, Status: ${personaje.status}</p>
        <button class="btn btn-primary" disabled>${personaje.location.name}</button>
        <button class='btn btn-danger' onclick='eliminarCard(this)'> Eliminar </button>
        <button class='btn btn-warning' onclick='ocultarCard(this)'> Ocultar </button>
      </div>
      </div>  
    `)
  }
})

function eliminarCard(el) {
  $(el.parentNode.parentNode).remove();
}
function ocultarCard(el) {
  $(el.parentNode.parentNode).
  animate({
    opacity: 0.2,
    top: '-50px',
    position: 'absolute',
    right: '-100px'
  }, 2000).
  css({
    'background': 'green'
  }).
  slideUp(2000);
}

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

  /**
   * Probando agregar y eliminar contenido con jQuery
   */
  //probar el append
  $('.appendBtn').click(() => {
    $("#addDeleteJQuery").append('contenido append')
  })
  //probar el prepend
  $('.prependBtn').click(() => {
    $("#addDeleteJQuery").prepend('contenido prepend')
  })
  //probar el after
  $('.afterBtn').click(() => {
    $("#addDeleteJQuery").after('<p>contenido after</p>')
  })
  //probar el before
  $('.beforeBtn').click(() => {
    $("#addDeleteJQuery").before('<p>contenido before</p>')
  })
  //probar el empty
  $('.emptyBtn').click(() => {
    $("#addDeleteJQuery").empty();
  })
  //probar el remover
  $('.removeBtn').click(() => {
    $("#addDeleteJQuery").remove();
  })
  /**
   * Probar animate con scroll
   */
  $('#addDeleteJQuery').fadeOut();
  $(window).on("scroll", function() {
    $('#addDeleteJQuery').fadeIn(3500);
  });
});

