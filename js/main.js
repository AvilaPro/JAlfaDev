var peliculas;
fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=d5eb23ab03971c50b6ed148e54b3a717').then(response => response.json())
.then(data => {
    console.log(data);
    peliculas = data.results;
    //Iteramos el arreglo y creamos elementos.
    let pelisContainer = document.getElementById("peliculas");
    for (const peli of peliculas) {
        pelisContainer.innerHTML += `
            <div class="card" style="width: 18rem; max-height: 70vh; margin: 15px 0;">
                <img src=https://media.themoviedb.org/t/p/w220_and_h330_face/${peli.poster_path}" class="card-img-top" alt="peliImg" style="max-height:70%;">
                <div class="card-body">
                    <h5 class="card-title">${peli.title}</h5>
                    <p class="card-text" style="text-overflow: ellipsis; overflow: hidden; white-space: nowrap; height:32px;">${peli.overview}.</p>
                    <span class="badge rounded-pill text-bg-success">${peli.vote_average}</span>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        `
    }

})
.catch(err => console.error(err));