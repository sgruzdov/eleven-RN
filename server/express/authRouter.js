const Router = require('express')
const router = new Router()
const controller = require('./authController')
const { check } = require('express-validator')
const authMiddleware = require('./middleware/auth.middleware')


router.post('/login', controller.login)

module.exports = router