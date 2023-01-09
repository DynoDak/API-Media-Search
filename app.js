//API http://www.omdbapi.com/?apikey=c8e53fcb&

const resultEl = document.querySelector('.result__wrapper')

async function onSearchChange(event) {
    const search = event.target.value
    renderMovies(search)
}

async function renderMovies(movie) {
    const movieInfo = await fetch(`http://www.omdbapi.com/?apikey=c8e53fcb&s=${movie}`)
    const movies = await movieInfo.json();
    resultEl.innerHTML = movies.Search.slice(0, 6).map((movie) => movieHTML(movie)).join("")
}

function movieHTML(movie) {
  return `<div class="result">
  <figure>
    <img src="${movie.Poster}" class="movie__poster" alt="">
  </figure>
  <h3>${movie.Title} </h3>
  <h4>${movie.Year} </h4>
</div>`
}

let refresh = 'fast'
setTimeout(() => renderMovies(refresh), 750)