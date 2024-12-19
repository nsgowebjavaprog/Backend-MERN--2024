const http = require('http')
const hostname = '127.0.0.1'

const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader("Hello", "text/plain")
    res.end("Good Morning: NS LONI")
})

server.listen(port, hostname, () =>{
   console.log(`Server is listening at http://${hostname}:${port}`) 
})