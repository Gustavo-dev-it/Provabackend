const mongoose = require('mongoose')

//Crio o esquema de autor

const autorSchema = new mongoose.Schema({

     nome:{
        type: String,
        required: true
     },
     sobre:{
        type: String,
        required: true
     },
     nacionalidade:{
        type: String,
        required: true
     },
     data_nascimento:{
        type: Date,
        required: true
     },
     filmes:{
        type: mongoose.SchemaTypes.ObjectId,
        ref:'filme',
        required: false
     }

},

{
    timestamps:true
}

)


const Autor = mongoose.model('autor', autorSchema)


module.exports = Autor
//Exporto para meu autorControllers