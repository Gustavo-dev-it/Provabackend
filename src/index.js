
const express = require('express')
const app = express()
const porta = 3000

const DBConection = require('./database/connection')




//middleware
app.use(express.json())
const autenticacaoRoutes = require('./routes/autenticacao.routes')
app.use(autenticacaoRoutes)


const {checarTOKEN} = require('./validators/autenticacaoValidator')

const router = require('./routes/routes')
app.use('/', checarTOKEN, router)

app.use(router)





app.listen(porta, ()=> {
    DBConection() 
    console.log('Aplicação rodando na porta', porta)
})