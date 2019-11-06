/* Agrega un endpoint '/api/suma' que responda una peticion de tipo GET con la suma de dos numeros que recibe 
mediante las querys num1 y num2. El servidor debe responder con un codigo de estado 200 y un json como el 
siguiente: {'resultado': 7 } */

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json());

app.get('/api/suma', (req, res) => {
    const { num1, num2 } = req.query;
    const resultado = (parseInt(num1) + parseInt(num2));
    res.status(200).send({ resultado })
})

app.listen(5000, ()=> { console.log( 'Servidor escuchando en el puerto 5000')})