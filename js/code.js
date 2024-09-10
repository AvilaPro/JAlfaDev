$.get('https://jsonplaceholder.typicode.com/users', (data) => {
    console.table(data);
}, 'json')

function buscarId(id) {
    $.get('https://jsonplaceholder.typicode.com/users',
        { id: id },
        (data) => {
            console.log(data);
            $('#nameUserId').text(`${data[0].id} - ${data[0].username}`);
        }
    )
}

function buscarIdfetch(id) {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`).
    then((res) =>{ 
        return res.json();
    }).
    then((data) => {
        console.log(data);
        $('#nameUserId').text(`${data.id} - ${data.username}`);
    })
}

$("#formSerialize").on("submit", function (event) {
    console.log($(this).serializeArray());
    event.preventDefault();
    let dataSerialize  = $(this).serializeArray();
    let stringDataSerialize =  JSON.stringify(dataSerialize);
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: {
            stringDataSerialize
        }
    }).then(res => res.json()).
    then((data) => {
        console.log(data);
    })


});