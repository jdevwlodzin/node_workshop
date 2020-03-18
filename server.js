// import built-in Node packages
const express = require('express'); // import express
const server = express();

const port = 4000;

const data = require('./data');
const song = data.list[0];
console.log(`song: ${song.title} by ${song.artist}`);

server.get("/", (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

server.get("/json", ({ res }) => {
	res.send((JSON.stringify({ name: "Lenny" })));
});

server.get("/products", (req, res) => {
	res.sendFile(__dirname + '/products.html');
});

server.get("/api/items", ({ res }) => {
	res.send(
		JSON.stringify(
			[
				{ id: 1, name: "toilet paper", price: 199.99 },
				{ id: 2, name: "hand sanitizer", price: 299.99 }
			]
		)
	);
});

server.listen(port, () => { // Callback function in ES6
	console.log(`Server listening at ${port}`);
});
