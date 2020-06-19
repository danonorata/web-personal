const express = require('express');
const app = express();
const path = require ('path');
const bodyParser = require('body-parser');
// const bd = require('./bd.json')
const { Types } = require("mongoose");
const model = require("./schema");
const peliculas = require ("./schema");

// Middleware
// Obligatorio para proyectos que usan express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Para usar archivos estaticos (en la computadora) de una carpeta dada
// app.use(express.static('../Actual'));




// Rutas

app.get("/peliculas", (req, res) => {
  model
    .find({})
    .exec()
    .then((peliculas) => {
      res.statusCode = 200; // OK
      res.json(peliculas);
    })
    .catch((err) => {
      res.statusCode = 500; // Internal Server Error
      res.json({ mensaje: "Ocurrio un error al realizar la consulta " });
    });
});



// app.get('/peliculas', (req,res)=>{
//   res.send('Que pedo perrote mayor...!');
// });

// app.get('/peliculas', (req, res) =>{
//   res.send('Buen inicio eh...')
// });


// Servidor y BDD



app.listen (3000, () => {
  console.log ('Conectado al puerto 3000');
});


