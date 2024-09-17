function registrarUsuario(form) {
    let formData = new URLSearchParams();
    for (const input of form) {
        formData.append(input.name, input.value);
    }
    fetch("https://nestmyclass001-production.up.railway.app/user/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json",
        },
        body: formData.toString()
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
}

function iniciarSesion(form) {
    let formData = new URLSearchParams();
    for (const input of form) {
        formData.append(input.name, input.value);
    }
    fetch("https://nestmyclass001-production.up.railway.app/user/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json",
        },
        body: formData.toString()
    }).then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data.access_token);
        localStorage.setItem("jwt", data.access_token);

        //guardar el token en el localstorage
        console.log(JSON.stringify(data));
    })
    .catch(error => console.error('Error:', error));
}

function consultarProductos() {
    fetch("https://nestmyclass001-production.up.railway.app/products", {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("jwt")
        }
    }).then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

