const mongoose = require('mongoose')

//Contruo o esquema do meu banco de dados

const filmeSchema = new mongoose.Schema({
    titulo:{
        type: String,
        required: true
    },
    sinopse:{
        type: String,
        required: true
    },
    idioma:{
        type: String,
        required: true
    },
    ano:{
        type: Date,
        required: true
    },
    preco:{
        type: String,
        required: true
        
    },
    genero:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'genero',
        required: false
    },
    autor:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'autor',
        required: false
    }
},

{
    timestamps: true
}


)



const Filmes = mongoose.model('filme', filmeSchema)


module.exports = Filmes
//Importo para meus controllers de livros