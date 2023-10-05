var username = "";
var tasa = 0;

// if (username == "") {
//     do {
//         username = prompt("Ingrese su nombre de usuario");
//         if (username == null || username == "") {
//             alert("Debe ingresar un valor, por favor reintente.")
//         }
//     } while (username == "");
// }

let spanUsername = document.getElementById("username");
spanUsername.innerHTML = username;
spanUsername.style.color = "#FF7757"
console.log(document.getElementById("username"));

/**
 * Cambiar los estilos de background
 */
console.log(document.getElementsByTagName("body"));
document.getElementsByTagName("body")[0].style.backgroundColor = '#005DDB';
console.log(document.getElementsByTagName("p"));
for (const ps of document.getElementsByTagName("p")) {
    ps.style.color = "#F9F871";
}
console.log(document.getElementsByClassName("pClase"));
for (const psc of document.getElementsByClassName("pClase")) {
    psc.style.fontWeight = "bold";
}
// document.getElementsByTagName("p")[0].style.color = "red";

/**
 * Cap 9
 */
console.log(document.inicio);
if (username == "" && tasa == 0) {
    document.inicio.style.display = "flex";
} else {
    document.inicio.style.display = "none";
}

console.log(document.inicio.username.value)
function setUsernameTasa() {
    let inputUser = document.inicio.username;
    let inputTasa = document.inicio.tasa;
    if (inputUser.value == "") {
        alert("Debes ingresar un nombre de usuario");
    }
    if (inputTasa.value == "") {
        alert("Debes ingresar un monto de tasa del dolar");
    }
    if (inputUser != "" && inputTasa != "") {
        username = inputUser.value;
        tasa = parseFloat(inputTasa.value);
        document.inicio.style.display = "none";
        document.calculadora.style.display = "flex";
    }
}

function calcularBs() {
    let monto =  document.calculadora.monto;
    let resultado = document.calculadora.resultado;
    if (monto.value == "" || parseFloat(monto.value) <= 0) {
        alert("Debes ingresar un valor superior a cero");
        monto.value = "";
    }else{
        let result = tasa * parseFloat(monto.value);
        resultado.value = result;
    }

}

/**
 * Cap 10
 */
// document.calculadora.children[3].addEventListener("click", calcularBs);
document.calculadora.elements[2].onclick = calcularBs;
document.inicio.guardar.addEventListener("click", setUsernameTasa);

