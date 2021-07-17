const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')

const accountSid = 'ACfeaaddf679306229e1c5d718d830df5e'
const authToken = '65c52f1a6274311208c7b6a03147646e'
const client = require('twilio')(accountSid, authToken)

const { secretKey } = require('../../config')


const generateAccessToken = (id) => {
    const payload = {id}
    return jwt.sign(payload, secretKey, {expiresIn: '24h'})
}


class authController {
    async login(req, res) {
        try {
            const { confirmCode } = req.body
            
            await client.messages.create({ 
                    body: confirmCode,  
                    messagingServiceSid: 'MGcd0e88c0449c81d91da19ff8d6ca765b',      
                    to: '+375336464588' 
                }).done()

            return res.json({message: 'Code success'})

            // const user = await User.findOne({username})
            // if(!user) {
            //     res.status(400).json({message: `User ${username} not found`})
            // }
            // const validPassword = bcrypt.compareSync(password, user.password)
            // if(!validPassword) {
            //     res.status(400).json({message: 'Wrong password entered'})
            // }

            // const token = generateAccessToken(user._id)
            // const userData = await UserData.findOne({username})
            // return res.json({token, userData})

        } catch(e) {
            console.log(e)
            res.status(400).json({message: 'Login error'})
        }
    }

    // async addScooter(req, res) {
    //     const getRandomIntInclusive = (min, max) => {
    //         min = Math.ceil(min);
    //         max = Math.floor(max);
    //         return Math.floor(Math.random() * (max - min + 1)) + min; 
    //     }
    
    //     const getRandomIntInclusive2 = (min, max) => {
    //         return Math.random() * (max - min) + min; 
    //     }
    
    //     for(let i = 0; i < 60; i++) {
    //         let scooter = new ScooterModel({
    //             scooterId: getRandomIntInclusive(100000, 999999),
    //             location: {
    //                 latitude: getRandomIntInclusive2(53.832952424813264, 53.96976226289491),
    //                 longitude: getRandomIntInclusive2(27.407319029893802, 27.68970102456448),
    //             },
    //             charge: getRandomIntInclusive(0, 100),
    //             active: Math.random() > 0.8,
    //             breakdown: Math.random() < 0.1,
    //         })
    //         await scooter.save()
    //     }
    // }
}

module.exports = new authController()