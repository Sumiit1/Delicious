const mongoose = require('mongoose')

mongoose
    .connect('mongodb://127.0.0.1:27017/food-ordering', { useNewUrlParser: true })
    .then(()=>{
        console.log("successfull")
    })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db