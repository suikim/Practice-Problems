//includes all content of express directory
var express = require("express");
//execute it and save to var called app
var app = express();


//route to root, get() listens for route "/" and executes function(request, response)
app.get('/', function(req, res){
	res.send('hello world !!!');
	console.log("root page, hello world");
});

//route "/bye", sends back "goodbye"
app.get('/bye', function(req, res){
	res.send('goodbye !!!');
	console.log("you reached bye page");
});

//route "/dog", sends back "woof"
app.get('/dog', function(req, res){
	res.send('W O O F');
	console.log("you reached dog page");
});


//routes with different params in a pattern, also change content of page based on params
app.get('/:animal/comments/:id/:title', function(req, res){
	var subject = req.params.animal;
	var topic = req.params.title;

	res.send('Welcome to the ' + subject + ' page! Specifically, about ' + topic);
	console.log("comments page");
	//to print parameters in request
	console.log(req.params);
});


// route for any url that doesn't match previous routes we made
app.get('*', function(req, res){
	res.send('Whoops, not valid url!');
});


//tells express to listen for requests and start server
app.listen(3000, console.log("listening to port 3000"));
