import { apiKey } from "./key.js";

const filmes = document.querySelector(".filmes");
const input = document.querySelector(".container-pesquisa");
const botaoSearch = document.querySelector(".container-pesquisa-icone");
var checkbox = document.querySelector(".container-checkbox");

botaoSearch.addEventListener('click', searchMovie);

checkbox.addEventListener('change', function() {
  if (this.checked) {
    console.log("Checkbox is checked..");
  } else {
    console.log("Checkbox is not checked..");
  }
});

input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      searchMovie();
      return;
    }
});

window.onload = async function() {
    try {
        const movies = await getPopularMovies();
        movies.forEach(movie => renderMovie(movie));
    } catch (error) {
        console.error('Erro ao obter os filmes populares:', error);
    }
}

async function searchMovie() {
    const inputValue = input.value
    if (inputValue != '') {
      cleanAllMovies()
      const movies = await searchMovieByName(inputValue)
      movies.forEach(movie => renderMovie(movie))
    }
}

async function searchMovieByName(title) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${title}&language=en-US&page=1`
    const fetchResponse = await fetch(url)
    const { results } = await fetchResponse.json()
    return results
}

async function getPopularMovies() {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
    const fetchResponse = await fetch(url);
    const { results } = await fetchResponse.json();
    return results;
}

function cleanAllMovies() {
    filmes.innerHTML = ''
}

function favoriteButtonPressed(event, movie) {
    const favoriteState = {
        favoritado: 'image/Vector.svg',
        desfavoritado: 'image/Heart.svg'
    };

    if(event.target.src.includes(favoriteState.desfavoritado)) {
        event.target.src = favoriteState.favoritado;
        saveToLocalStorage(movie);
    } else {
        event.target.src = favoriteState.desfavoritado;
        removeFromLocalStorage(movie.id);
    }
}

function getFavoriteMovies() {
    return JSON.parse(localStorage.getItem('favoriteMovies'));
}

function saveToLocalStorage(movie) {
    const movies = getFavoriteMovies() || [];
    movies.push(movie);
    const filmesJSON = JSON.stringify(movies);
    localStorage.setItem('favoriteMovies', filmesJSON);
}

function checkMovieIsFavorited(id) {
    const movies = getFavoriteMovies() || [];
    return movies.find(movie => movie.id == id);
}

function removeFromLocalStorage(id) {
    const movies = getFavoriteMovies() || [];
    const encontraFilme = movies.find(movie => movie.id == id);
    const filmesNovos = movies.filter(movie => movie.id != encontraFilme.id);
    localStorage.setItem('favoriteMovies', JSON.stringify(filmesNovos));
}

function renderMovie(movie) {
    const { id, title, poster_path, vote_average, release_date, overview } = movie;
    const isFavorited = checkMovieIsFavorited(id);
    const year = new Date(release_date).getFullYear();
    const image = `https://image.tmdb.org/t/p/w500${poster_path}`;

    const divFilme = document.createElement('div');
    divFilme.classList.add('filme');
    filmes.appendChild(divFilme);

    const divFilmeImagem = document.createElement('div');
    divFilmeImagem.classList.add('filme__imagem');
    const filmeImg = document.createElement('img');
    filmeImg.classList.add('filme-imagem');
    filmeImg.src = image;
    filmeImg.alt = `${title} Poster` ;
    divFilmeImagem.appendChild(filmeImg);
    divFilme.appendChild(divFilmeImagem);

    const divFilmeTexto = document.createElement('div');
    divFilmeTexto.classList.add('filme__texto');
    const filmeTitulo = document.createElement('p');
    filmeTitulo.classList.add('filme-titulo');
    filmeTitulo.textContent = `${title} ${year}`;
    divFilmeTexto.appendChild(filmeTitulo);
    divFilme.appendChild(divFilmeTexto);

    const divFilmeAvaliacao = document.createElement('div');
    divFilmeAvaliacao.classList.add('filme__avaliacao');
    divFilmeTexto.appendChild(divFilmeAvaliacao);
    const divFilmeNota = document.createElement('div');
    divFilmeAvaliacao.appendChild(divFilmeNota);
    const imgEstrela  = document.createElement('img');
    imgEstrela.classList.add('img-estrela');
    imgEstrela.src = 'image/Star.svg';
    imgEstrela.alt = 'Star';
    const filmeNota = document.createElement('span');
    filmeNota.classList.add('avaliacao-paragrafo');
    filmeNota.textContent = vote_average;
    divFilmeAvaliacao.appendChild(imgEstrela);
    divFilmeAvaliacao.appendChild(filmeNota);
    divFilmeAvaliacao.appendChild(divFilmeNota);

    const divFilmeFav = document.createElement('div');
    divFilmeFav.classList.add('filme__fav');
    const imagemCoracao = document.createElement('img');
    imagemCoracao.src = isFavorited ? 'image/Vector.svg' : 'image/Heart.svg';  //se true coracao preechido se nao coracao aberto
    imagemCoracao.alt = 'Heart';
    imagemCoracao.addEventListener('click', (event) => favoriteButtonPressed(event, movie));
    imagemCoracao.classList.add('img-coracao');
    const favoritoTexto = document.createElement('span');
    favoritoTexto.classList.add('avaliacao-paragrafo');
    favoritoTexto.textContent = 'Favoritar';
    divFilmeFav.appendChild(imagemCoracao);
    divFilmeFav.appendChild(favoritoTexto);
    divFilmeAvaliacao.appendChild(divFilmeFav);

    const divFilmeSinopse = document.createElement('div');
    divFilmeSinopse.classList.add('filme__sinopse');
    const filmeSinopse = document.createElement('span');
    filmeSinopse.classList.add('filme-sinopse');
    filmeSinopse.textContent = overview;
    divFilmeSinopse.appendChild(filmeSinopse);
    divFilme.appendChild(divFilmeSinopse);
}
