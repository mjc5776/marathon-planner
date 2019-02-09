const genres = [
  {
    id: 28,
    name: "Action"
  },
  {
    id: 12,
    name: "Adventure"
  },
  {
    id: 16,
    name: "Animation"
  },
  {
    id: 35,
    name: "Comedy"
  },
  {
    id: 80,
    name: "Crime"
  },
  {
    id: 99,
    name: "Documentary"
  },
  {
    id: 18,
    name: "Drama"
  },
  {
    id: 10751,
    name: "Family"
  },
  {
    id: 14,
    name: "Fantasy"
  },
  {
    id: 36,
    name: "History"
  },
  {
    id: 27,
    name: "Horror"
  },
  {
    id: 10402,
    name: "Music"
  },
  {
    id: 9648,
    name: "Mystery"
  },
  {
    id: 10749,
    name: "Romance"
  },
  {
    id: 878,
    name: "Science Fiction"
  },
  {
    id: 10770,
    name: "TV Movie"
  },
  {
    id: 53,
    name: "Thriller"
  },
  {
    id: 10752,
    name: "War"
  },
  {
    id: 37,
    name: "Western"
  }
];

var movieApi = {
  key: "f2e5add79221379cbdfc8bd98daf758e",
  getMovie: function(title) {
    var URL =
      "https://api.themoviedb.org/3/search/movie?api_key=" +
      this.key +
      "&query=" +
      title;
    return $.ajax({
      type: "GET",
      url: URL
    });
  },
  getSimilar: function(movieId) {
    var URL =
      "https://api.themoviedb.org/3/movie/" +
      movieId +
      "/similar?api_key=" +
      this.key +
      "&language=en-US&page=1";
    return $.ajax({
      type: "GET",
      url: URL
    });
  },
  getNowPlaying: function() {
    var URL =
      "https://api.themoviedb.org/3/movie/now_playing?api_key=" +
      this.key +
      "&language=en-US&page=1";
    return $.ajax({
      type: "GET",
      url: URL
    });
  },
  getByGenre: function(term) {
    var genreId;
    for (let i = 0; i < genres.length; i++) {
      if (genres[i].name === term) {
        genreId = genres[i].id;
      }
    }
    var URL =
      "https://api.themoviedb.org/3/discover/movie?api_key=" +
      this.key +
      "&language=en-US&sort_by=popularity.desc&include_video=false&page=1" +
      "&with_genres=" +
      genreId;
    return $.ajax({
      type: "GET",
      url: URL
    });
  }
};

movieApi.getMovie("Jack Reacher");

//API key: f2e5add79221379cbdfc8bd98daf758e
//This finds a movie by title: https://api.themoviedb.org/3/search/movie?api_key=f2e5add79221379cbdfc8bd98daf758e&query=[title]
//This finds similar movies based on a single film (selected by TMDB id): https://api.themoviedb.org/3/movie/[movie id]550/similar?api_key=f2e5add79221379cbdfc8bd98daf758e&language=en-US&page=1
//Movie id path within movie json: results[i].id
//Movie poster path: https://image.tmdb.org/t/p/w600_and_h900_bestv2/ + results[i].poster_path
//this URL has many useful queries to incorporate: https://api.themoviedb.org/3/discover/movie?api_key=f2e5add79221379cbdfc8bd98daf758e&language=en-US&sort_by=popularity.desc&include_video=false&page=1&primary_release_date.gte=1990-01-01&primary_release_date.lte=1999-12-31&vote_average.gte=6&with_genres=28
