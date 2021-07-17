const Scooter = require('../../mongo/models/Scooter')


class scooterController {
    async getScooters(req, res) {
        try {
            const scooters = await Scooter.find({active: false, breakdown: false})
            res.send(scooters)
        } catch(e) {
            console.log(e)
            res.status(400).json('Ошибка получения данных')
        }

    }
}

module.exports = new scooterController()