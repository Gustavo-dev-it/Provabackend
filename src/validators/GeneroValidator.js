// Comando para inicializar a biblioteca chamada yup
const yup = require('yup')

//Estrutura
const projetoSchema = yup.object().shape({
    acao: yup
        .string('campo precisa ser um texto')
        .required('campo obrigatorio'),

    aventura: yup
        .string(),

    comedia: yup
        .string(),
        
    terror: yup
        .string(),

    romance: yup
        .string()







})

// Middlewares intermediarios de validação 

function generoValidador(req, res, next) {
    projetoSchema
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
     generoValidador
}