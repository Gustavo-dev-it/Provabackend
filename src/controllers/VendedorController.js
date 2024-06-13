const Vendedor = require('../models/Vendedor');

// Métodos

async function create(req, res) {
    try {
        const vendedor = new Vendedor(req.body);
        const vendedorCriado = await vendedor.save();
        res.status(201).json(vendedorCriado);
    } catch (error) {
        res.status(400).json({ mensagem: "Erro ao criar vendedor", error });
    }
}

async function getAll(req, res) {
    try {
        const vendedores = await Vendedor.find();
        res.json(vendedores);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar vendedores", error });
    }
}

async function getById(req, res) {
    try {
        const vendedor = await Vendedor.findById(req.params.id);
        if (vendedor) {
            res.json(vendedor);
        } else {
            res.status(404).json({ mensagem: "Vendedor não encontrado" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar vendedor", error });
    }
}

async function update(req, res) {
    try {
        const vendedorAtualizado = await Vendedor.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (vendedorAtualizado) {
            res.status(200).json(vendedorAtualizado);
        } else {
            res.status(404).json({ mensagem: "Vendedor não encontrado" });
        }
    } catch (error) {
        res.status(400).json({ mensagem: "Erro ao atualizar vendedor", error });
    }
}

async function remove(req, res) {
    try {
        const vendedor = await Vendedor.findByIdAndDelete(req.params.id);
        if (vendedor) {
            res.json({ mensagem: "Vendedor excluído com sucesso!" });
        } else {
            res.status(404).json({ mensagem: "Vendedor não encontrado" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao excluir vendedor", error });
    }
}

module.exports = {
    getAll,
    create,
    getById,
    update,
    remove
};
