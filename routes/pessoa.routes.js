const express = require('express')
const pessoasController = require('../controllers/pessoa-controller')

const router = express.Router()

router.post('/', pessoasController.createPessoa)
router.get('/', pessoasController.getPessoa)

module.exports = router