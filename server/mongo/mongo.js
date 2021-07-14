const mongoose = require('mongoose')


const mongoConnect = async () => {
    try {
        await mongoose.connect('mongodb+srv://sergey:180022000@cluster0.xho10.mongodb.net/expedia?retryWrites=true&w=majority', {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        
        console.log('Соединение установлено')
    } catch(e) {
        console.log(e)
    }
}

module.exports = mongoConnect