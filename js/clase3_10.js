/**Variables explicitas */
var nombreCliente;
var cantidad;
var talla;
/*variables implicitas */
var precioUnitario;
var porcDesc;
var descuento;
var montoAPagar;

/**Entradas*/
do {
    nombreCliente = prompt("Bienvenido a nuetra fabrica, ingresa tu nombre: ");
    if (nombreCliente == null || nombreCliente == '') {
        alert("Obligatoriamente debe ingresar un dato correcto, no deje el campo vacío ni presione cancelar.")
    }
} while (nombreCliente == null || nombreCliente == '');
do {
    cantidad = prompt("Ingresa la cantidad de franelas a comprar: ");
    if (cantidad != null && cantidad != '') {
        cantidad = parseInt(cantidad);
        if (isNaN(cantidad)) {
            alert("El valor ingresado no es un numero");
        }
        if (cantidad < 0) {
            alert("Debe ingresar un numero positivo!!!");
        }
    }else{
        alert("Debe ingresar una cantidad correcta!!!");
    }
    
} while (cantidad == null || cantidad < 0 || cantidad == '' || isNaN(cantidad));
do {
    talla = prompt("Ingrese la talla de franela (S, M, L, XL): ");
    if (talla == null) {
        alert("Debe ingresar una talla correcta segun lo indicado");
    }else{
        talla = talla.toUpperCase();
        if ((talla != 'S' && talla != 'M' && talla != 'L' && talla != 'XL')) {
            alert("Debe ingresar una talla bien sea: S, M, L o XL");
        }
    }
} while (talla == null || (talla != 'S' && talla != 'M' && talla != 'L' && talla != 'XL'));

/**Manejo de datos */

/**Procesar la informacion */
switch (talla) {
    case "S":
        precioUnitario = 50000;
        break;
    case "M":
        precioUnitario = 55000;
        break;
    case "L":
        precioUnitario = 60000;
        break;
    case "XL":
        precioUnitario = 65000;
        break;
    default:
        alert("Talla ingresada incorrecta");
        break;
}

if (cantidad >= 6 && cantidad <= 11) {
    porcDesc = 5;
}else{
    if (cantidad >= 12 && cantidad <= 24) {
        porcDesc = 10;
    } else {
        if (cantidad > 24) {
            porcDesc = 15;
        }else{
            porcDesc = 0;
        }
    }
}

descuento = precioUnitario * cantidad * porcDesc / 100;

montoAPagar = precioUnitario * cantidad - descuento;

/**Salidas */
alert(`Estimado ${nombreCliente}, ha seleccionado comprar franelas de la talla ${talla}, lo que supone un precio unitario de ${precioUnitario}Bs y ha indicado que comprará una cantidad ${cantidad} unidades, lo que le asigna un descuento del ${porcDesc}%, que al aplicarselo al subtotal, el descuento sería de ${descuento}Bs, y obtiene entonces un total a pagar de: ${montoAPagar}Bs `)








