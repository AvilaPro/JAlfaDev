fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=d5eb23ab03971c50b6ed148e54b3a717').then(response => response.json())
.then(data => console.log(data))
.catch(err => console.error(err));