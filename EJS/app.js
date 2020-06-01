// includes, saves, and uses express
//can also be written as var app = requires("express")();
var express = require ("express");
var app = express();

// route for "/" page
app.get("/", function(req, res){
	//res.send("Welcome to the homepage");
	res.render("home.ejs");
});

// route that uses params 'order'
app.get("/register/:order", function(req, res){
	var order = req.params.order;
	//res.send("I would like to have a " + order);
	res.render("order.ejs", {printOrder: order});
});



// listen for requests and starts server
// console.log is to check server
app.listen(3000, console.log("listening to port 3000"));
