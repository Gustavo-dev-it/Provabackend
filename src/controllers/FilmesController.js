const Filme = require('../models/Filmes')

//metodos 


async function create(req, res) {

    const filme = new Filme(req.body)
    const filmeCriado = await filme.save()
    res.status(201).json(filmeCriado)

}

async function getAll(req, res) {
    res.json(await Filme.find())
} 


async function getById(req, res) {
    const filme = await Filme.findById(req.params.id)
    if (filme) {
        res.json(filme)
    } else {
        res.status(404).json({ mensagem: "Filme não encontrado" })
    }

}


async function update(req, res) {

    const filmeAtualizado = await Filme.findByIdAndUpdate(req.params.id, req.body)
    if (filmeAtualizado) {
        res.status(200).json(filmeAtualizado)
    }

    else {
        res.status(404).json({ mensagem: "Filme não encontrado" })

    }

}

async function remove(req, res) {
    await Filme.findByIdAndDelete(req.params.id)
    res.json({ mensagem: "Filme excluido com sucesso!" })
}











module.exports = {
    getAll,
    create,
    getById,
    update,
    remove

}