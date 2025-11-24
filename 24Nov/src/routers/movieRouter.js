const express = require('express');
const { getAllMovies } = require('../controllers/movieController');
const router = express.Router();

//Obtenemnos todas las películas
router.get("/", getAllMovies);

module.exports = router;