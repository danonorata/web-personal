const { Schema, model, connect } = require('mongoose'); // Destructuring

connect(
    "mongodb+srv://danonorata:danonorata@cluster0-9bwnx.gcp.mongodb.net/peliculas?retryWrites=true&w=majority",
    //"mongodb+srv://danonorata:danonorata@cluster0-9bwnx.gcp.mongodb.net/PelisWebPersonal?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true },
    ()=> console.log('BDD lista capitan')
    );

const peliculasSchema = new Schema({
    title: { type: String, required: true },
    year: { type: Number },
    cast: { type: String, required: true },
    genres: { type: String }
});


const peliculasModel = model("peliculas", peliculasSchema);

module.exports = peliculasModel;