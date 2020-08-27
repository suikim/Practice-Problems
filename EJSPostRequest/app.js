// include, save, and use express
var express = require('express');

var app = express();

//var bodyParser = require("body-parser");
//app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//from expressjs.com api
//app.post('/profile', function (req, res, next) {
//   console.log(req.body)
//   res.json(req.body)
//})

app.set("view engine", "ejs");


var movie = ["It", "Incredibles", "Interstellar", "HTTYD"];


// route for root pagecd ..

app.get("/", function(req, res){
	res.render("home.ejs");
});

// route for movies page
app.get("/movies", function(req, res){
	res.render("movie.ejs", {movie: movie});
});

app.post("/addMovie", function(req, res){
	var newMovie = req.body.newMovie;
	movie.push(newMovie);
	res.redirect("/movies");
});


// listen for requests, start server, console.log to check server
app.listen(3000, console.log("listening to port 3000"));