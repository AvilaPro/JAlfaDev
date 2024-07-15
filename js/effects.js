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
    $('#liRegister').hide();
    $('#liLogout').toggle();
  });
  //Register
  $('#btnSubmitRegister').click(() => {
    $('#liLogin').toggle();
    $('#liLogout').toggle();
  });
  //Logout
  $('#liLogout').click(() =>{
    $('#liLogin').show();
    $('#liRegister').show();
    $('#liLogout').hide();
  })
});