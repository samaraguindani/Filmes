import { apiKey } from "./key.js";

const filmes = document.querySelector(".filmes");

window.onload = async function() {
    try {
        const movies = await getPopularMovies();
        movies.forEach(movie => renderMovie(movie));
    } catch (error) {
        console.error('Erro ao obter os filmes populares:', error);
    }
}

async function getPopularMovies() {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
    const fetchResponse = await fetch(url);
    const { results } = await fetchResponse.json();
    return results;
}

function renderMovie(movie) {
    const { title, poster_path, vote_average, release_date, overview } = movie;
    const isFavorited = false;
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

