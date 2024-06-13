// Comando para inicializar a biblioteca chamada yup
const yup = require('yup')

//Estrutura
const cargoSchema = yup.object().shape({
    nome: yup
        .string('campo precisa ser um texto')
        .required('campo obrigatorio'),

    sobre: yup
        .string(),

    nacionalidade: yup
        .string()
        .required('campo obrigatorio'),

    data_nascimento: yup
        .date('Data invalida')
        .required('campo obrigatorio'),

    filmes: yup
    .string(),







})

// Middlewares intermediarios de validação 

function autorValidador(req, res, next) {
    cargoSchema
        .validate(req.body, { abortEarly: false }) // abortEarly : false, evita que devolva a reposta no primeiro erro
        .then(() => next())
        .catch(err => {
            const errors = err.inner.map(e => {
                const erro = {

                    campo: e.path,
                    erros: e.errors
                }
                return erro

            })

            res.status(400).json(err)

        })

}









module.exports = {
     autorValidador
}