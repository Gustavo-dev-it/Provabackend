
const yup = require('yup');


const departamentoSchema = yup.object().shape({
    titulo: yup
        .string('campo precisa ser um texto')
        .required('campo obrigatorio'),
    sinopse: yup.string('campo precisa ser um texto'),
    idioma: yup.string('campo precisa ser um texto'),
    ano: yup.string('campo precisa ser um texto'),
    preco: yup.string('campo precisa ser um texto'),
});


function filmeValidador(req, res, next) {
    departamentoSchema
        .validate(req.body, { abortEarly: false }) 
        .then(() => next())
        .catch(err => {
            const errors = err.inner.map(e => {
                return {
                    campo: e.path,
                    erros: e.errors
                };
            });

            res.status(400).json({ errors }) 
        })
}

module.exports = {
    filmeValidador
}