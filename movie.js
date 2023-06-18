var main = document.querySelectorAll('.main .centro')[0];

fetch('https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&languague=en-US&page=1')
  .then(response => response.json())
  .then(data => {
    data.results.map((i, j) => {

      if (j > 10)
        return;

      if (j != 0) {
        main.innerHTML += `
          <div class="card-movie"><img src="https://image.tmdb.org/t/p/w200${i.poster_path}" /></div>
        `;
      }

    });
  });

fetch('https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&languague=en-US&page=2')
  .then(response => response.json())
  .then(data => {
    data.results.map((i, j) => {

      if (j > 10)
        return;

      else {
        main.innerHTML += `
          <div class="card-movie"><img src="https://image.tmdb.org/t/p/w200${i.poster_path}" /></div>
        `;
      }

    });
  });

fetch('https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&languague=en-US&page=3')
  .then(response => response.json())
  .then(data => {
    data.results.map((i, j) => {

      if (j > 10)
        return;
      else {
        main.innerHTML += `
          <div class="card-movie"><img src="https://image.tmdb.org/t/p/w200${i.poster_path}" /></div>
        `;
      }

    });
  });

fetch('https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&languague=en-US&page=4')
  .then(response => response.json())
  .then(data => {
    data.results.map((i, j) => {

      if (j > 15)
        return;
       else {
        main.innerHTML += `
          <div class="card-movie"><img src="https://image.tmdb.org/t/p/w200${i.poster_path}" /></div>
        `;
      }

    });
  });

fetch('https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&languague=en-US&page=5')
  .then(response => response.json())
  .then(data => {
    data.results.map((i, j) => {

      if (j > 15)
        return;

      else {
        main.innerHTML += `
          <div class="card-movie"><img src="https://image.tmdb.org/t/p/w200${i.poster_path}" /></div>
        `;
      }

    });
  });
