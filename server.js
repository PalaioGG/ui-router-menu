var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, '/'))); //Register the directory
app.use('/views', express.static(path.join(__dirname, 'views'))); //Register the views folder
app.use('/assets', express.static(path.join(__dirname, 'assets'))); //Register the assets folder
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules'))); //Register the node_modules folder

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000);
console.log('running on localhost:3000...');