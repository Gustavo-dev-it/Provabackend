const mongoose = require('mongoose')

const vendedorSchema = new mongoose.Schema(
    {
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
    
        Cliente: {
            type: mongoose.Types.ObjectId,
            ref: 'cliente',
            required: false
        },
       
    },
    { timestamps: true })

const Vendedor = mongoose.model('vendedor', vendedorSchema)

module.exports = Vendedor