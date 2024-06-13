const express = require('express')
const router = express.Router()



const autenticacaoController = require('../controllers/autenticacaoController')
const {usuarioVALIDADOR, loginVALIDADOR} = require('../validators/autenticacaoValidator')


router.post('/auth/registro', usuarioVALIDADOR, autenticacaoController.registrar)


router.post('/auth/login', loginVALIDADOR, autenticacaoController.login)







module.exports = router