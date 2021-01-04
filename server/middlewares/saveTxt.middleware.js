
const saveTxt = (req, res, next) => {
    try{
        if(req.files.file && req.files.file.mimetype === 'text/plain'){
            const txt = req.files.file;
            let filePath = '/../' + txt.name
            txt.mv(__dirname + filePath, function (err) {
            if (!err) {
                req.filePath = filePath;
                next();
            }
        });
        }
    }catch(e){
        console.log(e)
    }
}

module.exports = saveTxt