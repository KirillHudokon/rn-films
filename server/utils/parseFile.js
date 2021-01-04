const readline = require('readline');
const fs = require('fs');

const parseFile = async (path, cb) => {
    let films = []
    let currentFilm = {}
    const readInterface = readline.createInterface({
        input: fs.createReadStream(path),
        output: process.stdout,
        console: false
    });
    readInterface.on('line', line => {
        const splitedLine = line.toString().split(":");
        if(!splitedLine[0].length){
            if(Object.keys(currentFilm).length){
                films.push(currentFilm)
            }
            currentFilm = {}
        }else{
            if(splitedLine[0].toLowerCase()=== 'release year'){
                currentFilm['releaseYear'] = splitedLine[1].trim()
            }else{
                currentFilm[splitedLine[0].toLowerCase().trim()] = splitedLine[1].trim()
            }
        } 
    });
    readInterface.on('close', async () => {
        fs.unlink(path, err=>console.log(err))
        await cb(films)
    })
}
module.exports = parseFile