const db = require('../models');
const axios = require('axios');

module.exports = function (app) {
  // ------- User API's --------------
  // Create new user
  app.post('/api/newuser/', function (req, res) {
    db.User.create({
      FirstName: req.body.firstname,
      LastName: req.body.lastname,
      EmailAddress: req.body.email,
      AuthId: req.body.authid // Need to grap this value from AuthO. Check with Mike S. on how AuthO works.
    }).then(function (user) {
      console.log(user);
      res.json(user);
    });
  });

  // Get all users
  app.get('/api/users', function (req, res) {
    db.User.findAll({}).then(function (user) {
      console.log(user);
      res.json(user);
    });
  });

  // Get user history
  app.get('/api/history/:id', function (req, res) {
    db.UserHistory.findAll({
      where: {
        UserId: req.params.id
      }
    }).then(function (history) {
      console.log(history);
      res.json(history);
    });
  });

  // Post user history
  app.post('/api/history/:user/:movie/:recommend', function (req, res) {
    db.UserHistory.create({
      UserId: parseInt(req.params.user),
      movieId: parseInt(req.params.movie),
      recommend: parseInt(req.params.recommend)
    }).then(function (result) {
      res.json(result);
    });
  });

  // Get current user
  app.get('/api/user/:id', function (req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (user) {
      res.json(user);
    });
  });

  // Post user preferences
  app.post('/api/addpref/:id/:userid', function (req, res) {
    db.UserPreference.create({
      GenreId: req.params.id,
      UserId: req.params.userid
    }).then(function (result) {
      // res.json(result);
      console.log('result');
    });
  });

  // Get Movie Genres
  app.get('/preference', function (req, res) {
    db.Genre.findAll({
      include: [{
        model: db.UserPreference
        // required: true //set required: true for a inner JOIN between Genre and UserPref
      }]
    }).then(function (data) {
      var hbsObject = {
        genres: data
      };
      // res.json(hbsObject);
      res.render('preference', hbsObject);
    });
  });

  // Get Movie Preferences
  app.get('/preference', function (req, res) {
    db.Genre.findAll({
      include: [{
        model: db.UserPreference,
        required: true // set required: true for a inner JOIN between Genre and UserPref
      }]
    }).then(function (data) {
      var hbsObject = {
        genres: data
      };
      // res.json(hbsObject);
      res.render('preference', hbsObject);
    });
  });

  // Get genre from preferences
  app.get('/api/preference/:genreId', function (req, res) {
    db.UserPreference.findOne({
      where: {
        GenreId: req.params.genreId
      }
    }).then(function (genre) {
      res.json(genre);
    });
  });

  // get genre preferences
  app.get('/api/userpreference/:userId', function (req, res) {
    db.UserPreference.findAll({
      where: {
        UserId: req.params.userId
      }
    }).then(function (response) {
      res.json(response);
    });
  });

  // Delete an example by id
  app.delete('/api/examples/:id', function (req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(dbExample => {
      res.json(dbExample);
    });
  });

  // TMDb API CALLS
  var key = 'f2e5add79221379cbdfc8bd98daf758e';

  // Get by title
  app.get('/api/movie/:title', function (req, res) {
    var URL =
      'https://api.themoviedb.org/3/search/movie?api_key=' +
      key +
      '&query=' +
      req.params.title;

    axios.get(URL).then(function (movie) {
      res.json(movie.data.results);
    });
  });

  // Get Similar movies
  app.get('/api/similar/:id', function (req, res) {
    var URL =
      'https://api.themoviedb.org/3/movie/' +
      req.params.id +
      '/similar?api_key=' +
      key +
      '&language=en-US&page=1';

    axios.get(URL).then(function (movies) {
      res.json(movies.data.results);
    });
  });

  // Get now playing
  app.get('/api/nowplaying', function (req, res) {
    var URL =
      'https://api.themoviedb.org/3/movie/now_playing?api_key=' +
      key +
      '&language=en-US&page=1';

    axios.get(URL).then(function (movies) {
      res.json(movies.data.results);
    });
  });

  // Get by Genre id
  app.get('/api/genre/:id', function (req, res) {
    var URL =
      'https://api.themoviedb.org/3/discover/movie?api_key=' +
      key +
      '&language=en-US&sort_by=popularity.desc&include_video=false&page=1' +
      '&with_genres=' +
      req.params.id;

    axios.get(URL).then(function (movies) {
      res.json(movies.data.results);
    });
  });

  // Get by Movie id
  app.get('/api/movieid/:id', function (req, res) {
    var URL =
      'https://api.themoviedb.org/3/movie/' +
      req.params.id +
      '?api_key=' +
      key +
      '&language=en-US';

    axios.get(URL).then(function (movie) {
      res.json(movie.data);
    });
  });

  // get movie DB genre preferences
  app.get('/api/userprefmoviedb/:userId', function (req, res) {
    db.UserPreference.findAll({
      attributes: [['genreId', 'moviegenreId']], // Alias for genreId
      where: {
        UserId: req.params.userId
      },
      include: db.Genre
    }).then(function (response) {
      res.json(response);
    });
  });

// API key: f2e5add79221379cbdfc8bd98daf758e
// This finds a movie by title: https://api.themoviedb.org/3/search/movie?api_key=f2e5add79221379cbdfc8bd98daf758e&query=[title]
// This finds similar movies based on a single film (selected by TMDB id): https://api.themoviedb.org/3/movie/[movie id]550/similar?api_key=f2e5add79221379cbdfc8bd98daf758e&language=en-US&page=1
// Movie id path within movie json: results[i].id
// Movie poster path: https://image.tmdb.org/t/p/w600_and_h900_bestv2/ + results[i].poster_path
// this URL has many useful queries to incorporate: https://api.themoviedb.org/3/discover/movie?api_key=f2e5add79221379cbdfc8bd98daf758e&language=en-US&sort_by=popularity.desc&include_video=false&page=1&primary_release_date.gte=1990-01-01&primary_release_date.lte=1999-12-31&vote_average.gte=6&with_genres=28
};
