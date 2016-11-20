const express = require('express');
const app = express();

app.use('/', function(req, res, next) {
	res.send(req.method + " " + req.url + " " + res.statusCode);
	next();
})

// app.use('/special', (req, res, next) => {
// 	res.send("You reached the special area");
// 	next();
// })

// app.get('/', function(req, res) {
// 	res.send('Hello World!\n');
// })

// app.get('/news', function(req, res) {
// 	res.send('You have reached news.\n')
// })

app.listen(3000, function() {
	console.log('Example app listening to port 3000!\n');
})