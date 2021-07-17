const Router = require('express')
const router = new Router()
const controller = require('../controllers/scooterController')


router.get('/getScooters', controller.getScooters)

module.exports = router