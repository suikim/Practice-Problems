// includes, saves, and uses express
//can also be written as var app = requires("express")();
var express = require ("express");
var app = express();

// to use images/css stylesheets: static files in express must be inside directory 
//    specified in static middleware (eg. 'public'), this line tells ejs to serve 
//    public directory
app.use(express.static( "public" ));

//var bodyParser = require("body-parser");
//app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


// public array for youOrder to practice post request
var totalOrder = [
{drink: "Coffee", cost: 3},
{drink: "Frappe", cost: 5},
{drink: "coffee beans (1lb)", cost: 14}
];

// route for "/" page
app.get("/", function(req, res){
	//res.send("Welcome to the homepage");
	res.render("home.ejs");
});

// route that uses params 'order'
app.get("/menu", function(req, res){
	var menu = [
	{drink: "Coffee", cost: "$3"},
	{drink: "Pour Over", cost: "$3.5"},
	{drink: "French Press", cost: "$3.5"},
	{drink: "Latte", cost: "$4.75"},
	{drink: "Coffee Milk", cost: "$4.50"},
	{drink: "Frappe", cost: "$5"},
	{drink: "Mocha Pot", cost: "$4"},
	{drink: "Coffee Beans (1lb)", cost: "$14"}
	];

	res.render("menu.ejs", {menu: menu})
});


// route that uses params 'order'
app.get("/register/:order", function(req, res){
	var order = req.params.order;
	//res.send("I would like to have a " + order);
	res.render("order.ejs", {printOrder: order});
});


// route for yourOrder 
// lists items in totalOrder, can add new drinks and cost of drink into 
//     totalOrder and updates total cost
app.get("/yourOrder", function(req, res){
	res.render("yourOrder.ejs", {order: totalOrder});
	console.log(totalOrder);
});

// route for post request, add to totalOrder
app.post("/addOrder", function(req, res){
	var newDrink = req.body.drink;
	var newCost = Number(req.body.cost);
	totalOrder.push({drink: newDrink, cost: newCost});
	res.redirect("/yourOrder");
});



// listen for requests and starts server
// console.log is to check server
app.listen(3000, console.log("listening to port 3000"));
