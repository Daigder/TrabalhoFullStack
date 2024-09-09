const { Pessoa } = require('../models')

exports.createPessoa = async (req, res) => {
    try {
        const pessoa = await Pessoa.create(req.body)
        res.status(201).json(pessoa)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

exports.getPessoas = async (req, res) => {
    try {
        const pessoas = await Pessoa.findAll()
        res.json(pessoas)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}