const express=require('express')
const app=express ()
const port=3030
const path=require('path')

app.get('/', function(request, response){
    response.sendFile(path.join(__dirname, '/views/home.html'))
})

app.get('/register', function(request, response){
    response.sendFile(path.join(__dirname, '/views/register.html'))
})

app.get('/login', function(request, response){
    response.sendFile(path.join(__dirname, '/views/login.html'))
})

app.use(express.static('public'))

app.get('*', function(request, response){
    response.send('NOT FOUND', 404)
})

app.listen(process.env.PORT||3000,function(){
    console.log("servidos corriendo en el puerto 3000");
})

