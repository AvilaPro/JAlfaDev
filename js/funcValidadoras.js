function vacioONull(data) {
    if (data == "" || data == null) {
        return true
    }else{
        return false
    }
}

function existeEnArray(data, arr) {
    if(arr.indexOf(data) != -1){
        return true
    }else{
        return false
    }
}