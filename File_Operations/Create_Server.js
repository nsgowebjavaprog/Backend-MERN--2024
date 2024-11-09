const http = require('http');

const server = http.createServer(function(req, res){
    res.end("Hello it's a HTTP Server local Host: 3000");
}) 
server.listen(3000);

//Hello it's a HTTP Server local Host: 3000