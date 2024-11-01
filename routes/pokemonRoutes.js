const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');
const { createPokemon } = require('../models/pokemonModel');

router.get('/', pokemonController.getAllPokemons);
router.get('/pokemon/:id', pokemonController.getPokemon);
router.get('/formulario', pokemonController.showForm);
router.get('/pokemon', pokemonController.addPokemon);

module.exports = router;
