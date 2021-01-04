const Films = require("../models/films")
const parseFile = require("../utils/parseFile")
const mongoose = require("mongoose")
const getFilms = async (req, res) => {
    try{
        res.status(200).json(await Films.find())
    }catch(e){
        res.status(400).json({message: e.message})
    }
}
const createFilm = async (req, res) => {
    try{
        const newFilm = new Films(req.body)
        await newFilm.save()
        res.status(201).json(await Films.find())
    }catch(e){
        res.status(409).json({message: e.message})
    }
}
const deleteFilm = async (req, res) => {
    const { id } = req.params
    try{
        await Films.findByIdAndRemove(id)
        res.json(await Films.find())
    }catch(e){
        res.status(400).json({message: e.message})
    }
}
const sortFilms = async (req, res) => {
    const { type } = req.params
    try{
        if(type.toLowerCase() === 'a-z'){
            res.status(200).json((await Films.find()).sort((a,b)=> {
                if(a.title.toLowerCase() > b.title.toLowerCase()){
                    return 1    
                 }
                 if(a.title.toLowerCase() < b.title.toLowerCase()){
                    return -1
                 }
                    return 0
            }))
        }
    }catch(e){
        res.status(400).json({message: e.message})
    }
}
const searchFilms = async (req, res) => {
    const { how } = req.params;
    try{
        if(how === 'stars'){
           let findedFilms = (await Films.find()).filter(film => {
                return film.stars.split(',').map(val=>val.trim()).filter(star=> star.toLowerCase() === req.body.text.toLowerCase()).length
            })
            res.status(200).json(findedFilms)
        }
        if(how === 'title'){
            res.status(200).json((await Films.find()).filter(film => film.title.toLowerCase() === req.body.text.toLowerCase()))   //await Films.find({title: req.body.text}) не могу сделать так потому что title из db нужен тоже в lowercase()
        }
    }catch(e){
        res.status(400).json({message:e.message})
    }
}
const importFile = async (req, res) => {
    try{
        const insertFilms = async (films) => {
            await Films.insertMany(films);
            res.status(200).json(await Films.find())
        }
        parseFile(__dirname + req.filePath, insertFilms);
    }catch(e){
        res.status(400).json({message:e.message})
    }
}
module.exports = {getFilms, createFilm, deleteFilm, sortFilms, searchFilms, importFile}