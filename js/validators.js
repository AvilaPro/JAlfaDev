function getDatafromPromt(message) {
    do {
        let  data = prompt(message);
        if (data === null || data == ""){
            alert("Please enter a value!!!");
        }else{
            return data;
        }
    } while (data === null || data == "");

}
/*Para buscar en array podemos usar:
*indexOf, que devuelve el indice o -1.
*includes, que devuelve true o false.
*O podemos usar un bucle for para buscarlo.

*/
function searchInArray(array, data) {
    let index = array.indexOf(data);
        if (index  != -1) {
            return {
                "index": index,
                "value": array[index],
                "found": true
            }
        }else{
            return {
                "index": -1,
                "found": false
            }
        }
}

