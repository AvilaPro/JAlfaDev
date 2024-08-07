Swal.fire({
  title: "<strong>Bienvenido al juego del <u>ahorcado</u></strong>",
  icon: "info",
  html: `
    Debes ir colocando letras e ir infiriendo cual es la palabra <b>oculta</b>,
    <i>Se requerira que inicies sesion</i>
  `,
  showCloseButton: true,
  showCancelButton: false,
  focusConfirm: false,
  confirmButtonText: `
    <i class="fa fa-thumbs-up"></i> Listo, A jugar!!!!
  `,
  confirmButtonAriaLabel: "",
  cancelButtonText: `
    <i class="fa fa-thumbs-down"></i>
  `,
  cancelButtonAriaLabel: "Thumbs down"
});