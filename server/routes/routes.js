const express = require("express");
const saveFile = require('../middlewares/saveTxt.middleware')
const {getFilms, createFilm, deleteFilm, sortFilms, searchFilms, importFile} = require("../controllers/films.js")
const router = express.Router();

router.get('/films', getFilms);
router.post('/films', createFilm);
router.delete('/films/:id', deleteFilm);
router.get('/films/sort/:type', sortFilms);
router.post('/films/search/:how', searchFilms);
router.post('/films/import', saveFile, importFile);
module.exports = router