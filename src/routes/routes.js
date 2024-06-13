const express = require ('express')
const router = express.Router()

const AutorController = require('../controllers/AutorControllers')

const FilmesController = require('../controllers/FilmesController')

const GeneroController = require('../controllers/GeneroController')

const ClienteController = require('../controllers/ClienteControllers')

const VendedorController = require ('../controllers/VendedorController')

// validadores
const {validarId} = require('../validators/IdValidator')
const { autorValidador} = require('../validators/AutorValidator') // CTRL espaço dentro do '{}' mostra o objeto correto
const { filmeValidador} = require('../validators/FilmeValidator')
const { clienteValidador} = require('../validators/ClienteValidator')
const { generoValidador} = require('../validators/GeneroValidator')
const {vendedorValidador} = require('../validators/VendedorValidator')




// Autor 
router.post('/autor', autorValidador, AutorController.create) 
router.get('/autor',AutorController.getAll) 
router.get('/autor/:id', validarId, AutorController.getById) 
router.put('/autor/:id', validarId, autorValidador, AutorController.update) 
router.delete('/autor/:id', validarId, AutorController.remove) 

// Funcionarios  
router.post('/filmes', filmeValidador, FilmesController.create)
router.get('/filmes', FilmesController.getAll)
router.get('/filmes/:id', validarId, FilmesController.getById)
router.put('/filmes/:id', validarId, filmeValidador, FilmesController.update)
router.delete('/filmes/:id', FilmesController.remove)


// Departamentos
router.post('/genero', generoValidador, GeneroController.create)
router.get('/genero', GeneroController.getAll)
router.get('/genero/:id',validarId, GeneroController.getById)
router.put('/genero/:id', validarId, generoValidador, GeneroController.update)
router.delete('/genero/:id', GeneroController.remove)

// Projetos

router.post('/cliente', clienteValidador, ClienteController.create) 
router.get('/cliente', ClienteController.getAll) 
router.get('/cliente/:id', validarId, ClienteController.getById) 
router.put('/cliente/:id', validarId, clienteValidador, ClienteController.update) 
router.delete('/cliente/:id', validarId, ClienteController.remove) 


// Vendedor

router.post('/vendedor', vendedorValidador, VendedorController.create) 
router.get('/vendedor', VendedorController.getAll) 
router.get('/vendedor/:id', validarId, VendedorController.getById) 
router.put('/vendedor/:id', validarId, vendedorValidador, VendedorController.update) 
router.delete('/vendedor/:id', validarId, VendedorController.remove) 







module.exports = router