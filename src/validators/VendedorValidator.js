// Comando para inicializar a biblioteca chamada yup
const yup = require('yup');

// Estrutura
const vendedorSchema = yup.object().shape({
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
});

// Middlewares intermediários de validação
function vendedorValidador(req, res, next) {
    vendedorSchema
        .validate(req.body, { abortEarly: false }) // abortEarly: false, evita que devolva a resposta no primeiro erro
        .then(() => next())
        .catch(err => {
            const errors = err.inner.map(e => ({
                campo: e.path,
                erros: e.errors
            }));

            res.status(400).json({ errors });
        });
}

module.exports = {
    vendedorValidador
};
