const Genero = require('../models/Genero')

//metodos

async function getAll(req, res){
const genero = await Genero.find()
res.json(genero)
}

async function create(req, res){
    const departamento = new Genero(req.body)
    const departamentoCriado = await departamento.save()
    res.status(201).json(departamentoCriado)
}

async function getById(req, res){
    const departamento = await Genero.findById(req.params.id)
    if(departamento){
        res.json(departamento)
    } else {
        res.status(404).json({ mensagem: "Genero não encontrado"})
    }
}


async function update(req, res){
    
    const generoAtualizado = await Genero.findByIdAndUpdate(req.params.id, req.body)
    if(generoAtualizado){
        res.status(200).json(generoAtualizado)
    } 

    else {
        res.status(404).json({ mensagem: "Genero não encontrado"})

    }
}


async function remove(req, res){
    await Genero.findByIdAndDelete(req.params.id)
    res.json({ mensagem: "Genero excluido com sucesso"})
}


module.exports = {

    getAll,
    create,
    getById,
    update,
    remove
}

