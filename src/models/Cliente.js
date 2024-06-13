   const mongoose = require('mongoose')

const clienteSchema = new mongoose.Schema({
        nome: {
            type: String,
            required: true
        },
        cpf: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        telefone: {
            type: String,
            required: true
        },
    
        filme: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'filme',
            required: false
        },
        
    },
    { timestamps: true }
)

const Cliente = mongoose.model('cliente', clienteSchema)

module.exports = Cliente 






