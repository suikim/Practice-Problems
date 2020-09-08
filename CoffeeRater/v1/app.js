
var express = require("express");
var app = express();
// to render template files, don't have to type out .ejs, just filename
app.set("view engine", "ejs"); 
// to use body parser
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

//cafe array
var cafeList = [
	{name: "Starbucks", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQOF5bRSHAkAW2Xmsmlckd7ONYz4Gx6HIyUKA&usqp=CAU"},
	{name: "Verve", image: "https://cdn.shopify.com/s/files/1/0035/9372/files/locations__pac_ave_900x.jpg?v=1578006217"},
	{name: "Inkling", image: "https://static1.squarespace.com/static/55b9bec4e4b07881563239f7/55d5264ee4b035574f6b0cf8/57ec76c5bebafb2886c272a7/1475259057368/6Y9A8424.jpg?format=1500w"},
	];

//landing page
app.get("/", function(req, res){
	res.render("landing");
});

//page to see all cafes
app.get("/allCafes", function(req, res){
	
	res.render("allCafes", {cafes: cafeList});
});

// rest convention: post request should be same route as page that shows objects that its adding
// form to add cafe to array
app.post("/allCafes", function(req, res){
	console.log("Post a cafe!")
	var cafeName = req.body.cafeName;
	var cafeImage = req.body.cafeImage;
	cafeList.push({name: cafeName, image: cafeImage});
	//default redirects to get request
	res.redirect("/allCafes");
});

//restful convention
app.get("/allCafes/new", function(req, res){
	res.render("newCafe");
});


app.listen(3000, console.log("listening to port 3000"));
