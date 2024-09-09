const express = require('express')
const pessoasController = require('../Controllers/pessoa-controller')

const router = express.Router()

router.post('/', pessoasController.createPessoa)
router.get('/', pessoasController.getPessoas)

module.exports = router