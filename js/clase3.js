var btnSession = document.getElementById("btnSession")
var loginForm = document.loginForm;
var registerForm = document.registerForm;
var postLoginBtn = loginForm.postLoginBtn;
var callRegisterFormBtn = loginForm.elements[4];
var postRegisterBtn = registerForm.elements[3];

//Manejadores de eventos
document.body.onload = (btnSession.innerText = 'Iniciar Sesion');
// btnSession.addEventListener("click", (e) => {
//     callToLoginForm(e)
// });
btnSession.onclick = function (e) {
    callToLoginForm(e)
};
postLoginBtn.onclick = postLogin;
callRegisterFormBtn.addEventListener("click", callToRegisterForm);
postRegisterBtn.addEventListener("click", postRegister);

//Metodos del sistema
function callToLoginForm(ev) {
    if (ev.target.innerHTML == "Iniciar Sesion") {
        loginForm.style.display = "block";
    } else {
        if (ev.target.innerHTML == "Cerrar Sesion") {
            btnSession.innerHTML = "Iniciar Sesion";
            btnSession.classList.replace("btn-danger", "btn-primary");
            //logica de cerrar sesion
        }
    }
    console.log(ev);
}
function callToRegisterForm() {
    loginForm.style.display = "none";
    btnSession.style.display = "none";
    registerForm.style.display = "block";
}
function postRegister() {
    //validar los inputs del formulario
    //Validar los inputs
    for (let i = 0; i < 2; i++) {
        if (registerForm.elements[i].value == "") {
            alert("Los inputs deben estar llenos");
            return
        }
    }
    registerForm.style.display = "none";
    btnSession.style.display = "block";
}
function postLogin() {
    //Validar los inputs
    for (let i = 0; i < 2; i++) {
        if (loginForm.elements[i].value == "") {
            alert("Los inputs deben estar llenos");
            return
        }
    }
    //Logica luego de validar los inputs
    loginForm.style.display = "none";
    btnSession.innerHTML = "Cerrar Sesion";
    btnSession.classList.replace("btn-primary", "btn-danger");
    //Logica de inicio de sesion
    //Validar que no esten vacios
    console.log(loginForm);
}