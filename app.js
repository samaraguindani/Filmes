const filmes = document.querySelector(".filmes");

const movies = [
  {
    image: 'image/Frame 2.svg',
    title: 'Batman',
    rating: 9.2,
    year: 2022,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    isFavorited: false
  },
  {
    image: 'image/Image.svg',
    title: 'Avengers',
    rating: 9.2,
    year: 2019,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    isFavorited: false
  },
  {
    image: 'image/Frame 2 (1).svg',
    title: 'Doctor Strange',
    rating: 9.2,
    year: 2022,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    isFavorited: true
  },
  {
    image: 'image/Frame 2 (2).svg',
    title: 'Avatar',
    rating: 9.2,
    year: 2009,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    isFavorited: true
  },
]

window.onload = function() {
    movies.forEach(movie => renderMovie(movie))
}

function renderMovie(movie) {
    const { title, image, rating, year, description, isFavorited } = movie

    const divFilme = document.createElement('div');
    divFilme.classList.add('filme');
    filmes.appendChild(divFilme);

    const divFilmeImagem = document.createElement('div');
    divFilmeImagem.classList.add('filme__imagem');
    const filmeImg = document.createElement('img');
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
    divFilmeAvaliacao.classList.add('filme__nota');
    divFilmeAvaliacao.appendChild(divFilmeNota);
    const imgEstrela  = document.createElement('img');
    imgEstrela.classList.add('img-estrela');
    imgEstrela.src = 'image/Star.svg';
    imgEstrela.alt = 'Star';
    const filmeNota = document.createElement('span');
    filmeNota.classList.add('avaliacao-paragrafo');
    filmeNota.textContent = rating;
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
    filmeSinopse.textContent = description;
    divFilmeSinopse.appendChild(filmeSinopse);
    divFilme.appendChild(divFilmeSinopse);
}

