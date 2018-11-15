const {
    User
} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

//helper function to sign a user object using the jwt library to get a tocken
function jwtSignUser(user) {
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}

module.exports = {
    async register(req, res) {
        // res.send({
        //     message: 'User is ' + req.body.email
        // })
        try {
            //create new user
            const user = await User.create(req.body)

            //res.send(user.toJSON())
            //return jwttoken after registration
            const userJson = user.toJSON()
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
        } catch (err) {
            //error such as user already exists
            res.status(500).send({
                error: 'This account is already in use: ' + req.body.email
            })
        }
    },

    async login(req, res) {
        try {
            //find user according to what was passed
            //get user and password from body
            const {
                email,
                password
            } = req.body
            //find user using email
            const user = await User.findOne({
                where: {
                    email: email
                }
            })
            //if no user returned
            if (!user) {
                return res.status(403).send({
                    error: 'the login email information is incorrect'
                })
            }

            //check password
            const isPasswordValid = await user.comparePassword(password)

            //if password is wrong, return error
            if (!isPasswordValid) {
                return res.status(403).send({
                    error: 'the login password information is incorrect'
                })
            }



            //if password correct, return jwttoken
            const userJson = user.toJSON()
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
        } catch (err) {
            //error such as user already exists
            res.status(500).send({
                error: 'Invalid Login Infoz'
            })
        }
    }
}