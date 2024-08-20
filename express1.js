const express = require('express');
const app = express();
const port = 3001;

// http verbs
// get post

app.get("/", (req,res)=>
{
    res.send('home page')
})

app.get("/contact", (req,res)=>
    {
        res.send('contact us page')
    })
app.get("/about", (req,res)=>
        {
            res.send('about us page')
})
        
app.get("/details/:id", (req,res)=>
    {
        res.send('details of ' + req.params.id)
})

app.post("/", (req,res)=>
{
  res.send("Data has been submitted");  
})


app.listen(port, ()=>
{
    console.log(":server is listeming at port no " + port);
})