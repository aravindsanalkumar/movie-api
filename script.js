//http://www.omdbapi.com/?i=tt3896198&apikey=50a89dd


const apikey = '50a89dd';


window.onload = function () {
    getMovieData('Inception');
}

function searchMovie() {
    const searchMovieName = document.getElementById('searchMovieName').value;
    if (searchMovieName != "") {
        getMovieData(searchMovieName);
    }
}

function getMovieData(movieName) {
    fetch(`https://www.omdbapi.com/?t=${movieName}&apikey=${apikey}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const cardMovie = document.getElementById('cardMovie');
            if (data.Response == 'False') {
                cardMovie.innerHTML = `<p>Movie not found!</p>`;
                movieDetails.innerHTML = '';
            }
            else {
                cardMovie.innerHTML = `<img src="${data.Poster}" alt="">`;
                const movieDetails = document.getElementById('movieDetails');
                movieDetails.innerHTML = `
                     <div class="d-flex gap-3 align-items-center">
                        <p>Movie name :</p>
                        <p>${data.Title}</p>
                    </div>
                    <div class="d-flex gap-3 align-items-center">
                        <p>Actors :</p>
                        <p>${data.Actors}</p>
                    </div>
                    <div class="d-flex gap-3 align-items-center">
                        <p>Director :</p>
                        <p>${data.Director}</p>
                    </div>
                    <div class="d-flex gap-3 align-items-center">
                        <p>Box Office :</p>
                        <p>${data.BoxOffice}</p>
                    </div>
                `

            }
            document.getElementById('searchMovieName').value = "";
        });
}




