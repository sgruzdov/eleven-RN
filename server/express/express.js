const express = require('express')
const mongoConnect = require('../mongo/mongo')
const authRouter = require('./authRouter')
const { PORT } = require('../config')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())


app.use("/auth", authRouter)



const startServer = () => {
    try {
        app.listen(PORT, () => console.log(`Сервер успешно запущен на порту ${PORT}`))
    } catch(e) {
        console.log(e)
    }
}

startServer()
mongoConnect()