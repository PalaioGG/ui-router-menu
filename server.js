var express = require('express');
var app = express();
var path = require('path');

//Register the directory (get access to index.js and folders)
app.use(express.static(path.join(__dirname, '/')));
//Register the node_modules folder
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules'))); 

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000);
console.log('running on localhost:3000...');