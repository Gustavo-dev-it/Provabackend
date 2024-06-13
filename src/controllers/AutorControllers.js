const Autor = require('../models/Autor')

//metodos 

async function getAll(req, res) {
    const autor = await Autor.find()
    res.json(autor)
}

async function create(req, res) {

        const autor = new Autor(req.body)
        const autorCriado = await autor.save()
        res.status(201).json(autorCriado)
    
}

async function getById(req, res) {
    const cargo = await Autor.findById(req.params.id)
    if (cargo) {
        res.json(cargo)
    } else {
        res.status(404).json({ mensagem: "Autor não encontrado" })
    }

}


async function update(req, res) {
   
        const cargoAtualizado = await Autor.findByIdAndUpdate(req.params.id, req.body)
        if(cargoAtualizado){
            res.status(200).json({mensagem:"Cargo atualizado!"})
        } 
        
        else {
            res.status(404).json({mensagem: "Autor não encontrado"})

        }
    
}

async function remove(req, res) {
    await Autor.findByIdAndDelete(req.params.id)
    res.json({ mensagem: "Autor excluido com sucesso!" })
}











module.exports = {
    getAll,
    create,
    getById,
    update,
    remove

}