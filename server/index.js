const express = require("express");
const cors = require("cors");
const routes = require("./routes/routes");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const fileUpload = require('express-fileupload');
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(fileUpload());
app.use(cors())
app.use(routes)
const CONNECTION_URL = 'mongodb+srv://kirillHudokon:mongodb123@cluster0.2tui1.mongodb.net/<dbname>?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
}).catch((error)=>{
    console.log(error.message)
})

mongoose.set('useFindAndModify', false)