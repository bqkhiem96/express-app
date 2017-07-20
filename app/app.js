var express = require('express');
var app = express.createServer();

app.get('/',function(req,res){

    res.send('<h1>Roux Academy Meeups</h1>');


});

var server = app.listen(3000,function(){
    console.log('listening on port 3000');
});

// var http = require('http');

// var myServer = http.createServer(function(req,res){

//     res.writeHead(200,{"Content-Type": "text/html"});
//     res.write('<h1>Roux hahah</h1>');
//     res.end();
// });

// myServer.listen(3000);
// console.log('Go to http://localhost:3000 on your browser mother fucker');

