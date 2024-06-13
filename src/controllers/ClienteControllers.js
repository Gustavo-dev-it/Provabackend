const Cliente = require('../models/Cliente')

//metodos 



async function create(req, res) {

    const cliente = new Cliente(req.body)
    const clienteCriado = await cliente.save()
    res.status(201).json(clienteCriado)

}

async function getAll(req, res) {
    const cliente = await Cliente.find()
    res.json(cliente)
}


async function getById(req, res) {
    const cliente = await Cliente.findById(req.params.id)
    if (cliente) {
        res.json(cliente)
    } else {
        res.status(404).json({
            mensagem: "cliente não encontrado"
        })
    }

}


async function update(req, res) {

    const clienteAtualizado = await Cliente.findByIdAndUpdate(req.params.id, req.body)
    if (clienteAtualizado) {
        res.status(200).json(clienteAtualizado)
    }

    else {
        res.status(404).json({
            mensagem: "cliente não encontrado"
        })

    }

}

async function remove(req, res) {
    await Cliente.findByIdAndDelete(req.params.id)
    res.json({
        mensagem: "cliente excluido com sucesso!"
    })
}











module.exports = {
    getAll,
    create,
    getById,
    update,
    remove

}