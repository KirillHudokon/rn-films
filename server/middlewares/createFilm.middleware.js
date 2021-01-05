const Films = require("../models/films")
const validateCreateFilm = async (req,res,next) => {
    try{
        const reqFilm = req.body
        const allFilms = await Films.find();
        let isEqual
        for(let i = 0; i < allFilms.length; i++){
            if(!allFilms.length){
                break;
            }
            isEqual = {
                title:false,
                format: false,
                releaseYear: false,
                stars: false
            }
            let currentFilm = allFilms[i]
            if(reqFilm.title.trim().toLowerCase() === currentFilm.title.trim().toLowerCase()){
                isEqual.title = true
            }
            if(reqFilm.format.trim().toLowerCase() === currentFilm.format.trim().toLowerCase()){
                isEqual.format = true
            }
            if(reqFilm.releaseYear == currentFilm.releaseYear){
                isEqual.releaseYear = true
            }
            
            let reqFilmStars = reqFilm.stars.split(",").map(val=>val.trim().toLowerCase())
            let currentFilmStars = currentFilm.stars.split(",").map(val=>val.trim().toLowerCase())
            if(reqFilmStars.length != currentFilmStars.length){
                continue;
            }
            let filmSet = new Set(currentFilmStars);
            const saveOldSet = [...filmSet]
            reqFilmStars.forEach(star => {
                filmSet.add(star)
            });
            if(saveOldSet.length === filmSet.size){
                isEqual.stars = true
            }      
            if(isEqual.title && isEqual.format && isEqual.releaseYear && isEqual.stars){
                throw new Error("cannot add same films")
            }
        }
        next()
    }catch(e){
        res.status(400).json({message: e.message})
    }
}
module.exports = validateCreateFilm