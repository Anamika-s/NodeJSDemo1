// create server

// import module http

const http= require('http');
// const uc = require('upper-case')

// create server

const server  = http.createServer((req, res)=>
{
    res.setHeader("Content-Type","text/html");
    // res.write(upperCase("ajay sood"));
    res.end("<h1>some kjhjjhkjhkj response is coming from server</h1><br/>added one more line")
    console.log("some response came")

})
  
server.listen(3000, ()=>
    {
        console.log("server is listening at port no 3000");
});


