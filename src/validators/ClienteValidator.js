const yup = require('yup');

// Estrutura
const Schema = yup.object().shape({
    nome: yup
        .string('campo precisa ser um texto')
        .required('campo obrigatorio'),
    cpf: yup
        .string('campo precisa ser um texto')
        .required('campo obrigatorio'),
    email: yup
        .string('campo precisa ser um texto')
        .email('email invalido')
        .required('campo obrigatorio'),
    telefone: yup
        .string('campo precisa ser um texto')
        .required('campo obrigatorio'),
    filme: yup
        .string('campo precisa ser um texto')
});

// Middleware de validação
async function clienteValidador(req, res, next) {
    try {
        await Schema.validate(req.body, { abortEarly: false })
        next()
    } catch (err) {
        const errors = err.inner.map(e => ({
            campo: e.path,
            erros: e.errors
        }));

        
        res.status(400).json({ errors })
    }
}

module.exports = {
    clienteValidador
};
