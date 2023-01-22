const mockBlog = require('./seed')
const express = require('express')
const Blog =require('./blogSchema')


const app = express()
app.use(express.json())
//index
app.get('/blog', (req,res) => {
     res.send(mockBlog)
})
//show
app.get('/blog/:id', (req, res) => {
     res.send(mockBlog[req.params.id]);
})

 //create
 app.post('/blog', (req,res) => {
     res.send(req.body)
 }

 )
app.listen(3008,() => {
     console.log("I hear you on this port 3008")
})
