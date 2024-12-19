const http = require('http')
const hostname = '127.0.0.1'

const port = 3000

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.statusCode = 200
        res.setHeader("Hello", "text/plain")
        res.end("Good Morning: NS LONI")
    }else if (req.url === '/about'){
        res.statusCode = 200
        res.setHeader("Hello", "text/plain")
        res.end("About NS LONI Engineering Stdent studying in 3rd Year")
    }else if(req.url === '/home'){
        res.statusCode = 200
        res.setHeader("Hello", "text/plain")
        res.end("Home is About Choice like, --> about, /, or anything")
    }else{
        res.statusCode = 404
        res.setHeader("Hello", "text/plain")
        res.end("404  Error Found Give valid url")
    }

})

server.listen(port, hostname, () =>{
   console.log(`Server is listening at http://${hostname}:${port}`) 
})