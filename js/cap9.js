/**
 * Declaracion de variables
 */
let nombre, edad, fecha, dia, mes, anio, sexo;

/**
 * Entradas
 */
nombre = prompt("Ingrese su nombre");
edad = prompt("Ingrese su edad");
dia = prompt("Ingrese el dia de su fecha de cumpleaños (dd)");
mes = prompt("Ingrese el mes de su fecha de cumpleaños (mm)");
anio = prompt("Ingrese el año de su fecha de cumpleaños (aaaa)");
sexo = prompt("Ingrese su sexo (M: Masculino, F: Femenino)");

/**
 * Validacion de valores ingresados
 */
if (nombre == null || nombre == "") {
    alert("Por favor ingrese su nombre \n No deje en campo vacio o de click al boton cancelar");
}
else if (edad == null || edad == "") {
    alert("Por favor ingrese su edad \n No deje en campo vacio o de click al boton cancelar");
    if (isNaN(parseInt(edad))) {
        alert("La edad debe ser un numero entero valido");
    }
}
else if (dia == null || dia == "") {
    alert("Por favor ingrese el dia de su fecha de cumpleaños \n No deje en campo vacio o de click al boton cancelar");
    if (isNaN(parseInt(dia))) {
        alert("El dia debe ser un numero entero valido");
    }
}
else if (mes == null || mes == "") {
    alert("Por favor ingrese el mes de su fecha de cumpleaños \n No deje en campo vacio o de click al boton cancelar");
    if (isNaN(parseInt(mes))) {
        alert("El mes debe ser un numero entero valido");
    }
}
else if (anio == null || anio == "") {
    alert("Por favor ingrese el anio de su fecha de cumpleaños \n No deje en campo vacio o de click al boton cancelar");
    if (isNaN(parseInt(anio))) {
        alert("El anio debe ser un numero entero valido");
    }
}
if (sexo == null || sexo == "") {
    alert("Por favor ingrese su sexo \n No deje en campo vacio o de click al boton cancelar");
    sexo = sexo.toUpperCase();
    if (sexo == "M") {
        sexo = "Masculino";
    }else if(sexo == "F"){
        sexo = "Femenino";
    }else{
        alert("Por favor ingrese su sexo (M: Masculino, F: Femenino)");
    }
}

