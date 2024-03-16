const http = require('http')

const server = http.createServer((req,res) => {
   if(req.url === '/'){
    res.end('Welcome to my home page')
   }
   else if(req.url === '/about'){
    res.end('Here is the short history')
   }
   else{
   res.end(`
   <h1>Ooops!!</h1>
   <p> We cannot seem to find the page you are looking for</p>
   <a href="/"> back Home</a>
   `)
   }
})

server.listen(5000)