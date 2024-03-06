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

    const divFilme = document.createElement('.div');
    divFilme.classList.add('filme');
    filmes.appendChild(divFilme);

    const divImagem = document.createElement('.div');
    divImagem.classList.add('filme__imagem');
    const filmeImg = document.createElement('img');
    filmeImg.src = image;
    filmeImg.alt = `${title} Poster` ;
    divImagem.appendChild(filmeImg);
    divFilme.appendChild(divImagem);

    const divTexto = document.createElement('.div');
    divTexto.classList.add('filme__texto');
    const filmeTitulo = document.createElement('p');
    filmeTitulo.textContent = `${title} ${year}`;
    divTexto.appendChild(filmeTitulo);
    divImagem.appendChild(divTexto);

    const divFilmeAvaliacao = document.createElement('.div');
    divFilmeAvaliacao.classList.add('filme__avaliacao');
    divTexto.appendChild(divFilmeAvaliacao);
    const divNota = document.createElement('.div');
    divAvaliacao.classList.add('filme__nota');
    divFilmeAvaliacao.appendChild(divNota);
    

    const imgEstrela  = document.createElement('img');
    imgEstrela.src = 'image/Star.png'
    starImage.alt = 'Star'
    const movieRate = document.createElement('span')
    movieRate.classList.add('movie-rate')
    movieRate.textContent = rating
    ratingContainer.appendChild(starImage)
    ratingContainer.appendChild(movieRate)
    informations.appendChild(ratingContainer)

}