/*
var http = require("http");
var fs = require("fs");
var server = http.createServer(function(request, response) {
	console.log("The following request has been made by the client " + request.url);
	if (request.url === "/" || request.url === "/home") {
		response.writeHead(200, {
			"Content-Type": "text/html"
		});
		fs.createReadStream(__dirname + "/index.html").pipe(response);
	} else if (request.url === "/contact") {
		response.writeHead(200, {
			"Content-Type": "text/html"
		});
		fs.createReadStream(__dirname + "/contact.html").pipe(response);
	} else if (request.url === "/api") {
		response.writeHead(200, {
			"Content-Type": "application/json"
		});
		var personInfo = [{
			firstName: "Ryan",
			lastName: "Copeland"
		}, {
			firstName: "Stephanie",
			lastName: "Arreola-Hernandez"
		}];
		response.end(JSON.stringify(personInfo)).pipe(response);
	} else {
		response.writeHead(400, {
			"Content-Type": "text/html"
		});
		fs.createReadStream(__dirname + "/404.html").pipe(response);
	}

}).listen(3000, "127.0.0.1");


console.log("Port 3000 is active...");
*/
var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("The client has requested the homepage.");
});

app.get("/home", function(req, res) {
  res.send("The client has requested the homepage");
});

app.get("/contact", function(req, res) {
  res.send("The client has requested the contactpage");
});

app.get("/profile/:id", function(req, res) {
  res.send("The client has requested to see a profile at " + req.params.id);
});

app.listen(3000, "127.0.0.1");
