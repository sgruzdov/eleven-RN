const jwt = require('jsonwebtoken')
const { secretKey } = require('../../config')

module.exports = (req, res, next) => {
    // console.log()
    if(req.method === 'OPTIONS') {
        return next()
    }

    try {
        const token = req.headers.authorization.split(' ')[1]

        if(!token) {
            return res.status(401).json({message: 'Auth error'})
        }

        const decoded = jwt.verify(token, secretKey)

        req.user = decoded
        next()
    } catch(e) {
        return res.status(401).json('Catch Auth error')
    }
}