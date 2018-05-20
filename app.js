var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();

var content = 'Hello World';
http.createServer( function (req,res){
    res.writeHead('200',{'content-type' : 'text/html'});
    fs.readFile('code.html','utf8',function(err,data) {
        if (err) throw err;
        res.write(data);
        res.end();
    });
    fs.writeFile('code.html',content,'utf8',function (err) {
    if(err) throw err;
    else
        console.log('Ghi file thanh cong!');
    });
}).listen(5000);
