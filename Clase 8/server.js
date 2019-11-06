const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//Configuracion para poder recibir el body
app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json())

app.get('/', (request, response) => {
    response.send({ message: 'Tu primera peticion'})
});

app.get('/home', (request, res) => {
    res.send({ message: 'Este es un mensaje desde el home'})
})

//Params
app.get('/user/:uid', (req,res) => {
    console.log(req.params);
    const uid = req.params.uid
    res.send({ message: `Id de usuario: ${uid}`})
});

//Querys
app.get('/search', (req, res) => {
    console.log(req.query);
    const { q, color, vidas} = req.query
    res.send({ q, color, vidas})
})

app.post('/create/user', (req,res) => {
    console.log(req.body);
    const { name, last_name, age, is_active } = req.body
    res.status(201).send({
        id: '19',
        name,
        last_name,
        age,
        is_active
    });
});

app.patch('/modificate/user/', (req,res) => {
    console.log(req.body)
    const { name, last_name, age, is_active } = req.body
    res.send({
        id: '20',
        name,
        last_name,
        age,
        is_active
    });
})

app.put('/modificate/user', (req,res) => {
    console.log(req.body)
    const { name, last_name, age, is_active } = req.body
    res.send({
        id: '21',
        name,
        last_name,
        age,
        is_active
    });
})

app.delete('/user/:id', (req,res) => {
    console.log(req.params);
    const id = req.params.id
    res.send({ message: `El usuario ${id} fue eliminado `})
});

app.listen(5000, ()=>{
    console.log('Server listening on port 5000')
} )