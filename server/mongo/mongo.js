const mongoose = require('mongoose')


const mongoConnect = async () => {
    try {
        await mongoose.connect('mongodb+srv://sergey:sergey@cluster0.xtdqw.mongodb.net/eleven?retryWrites=true&w=majority', {
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