const {
    User
} = require('../models')

module.exports = {
    async register(req, res) {
        // res.send({
        //     message: 'User is ' + req.body.email
        // })
        try {
            //create new user
            const user = await User.create(req.body)
            res.send(user.toJSON())
        } catch (err) {
            //error such as user already exists
            res.status(400).send({
                error: 'This account is already in use: ' + req.body.email
            })
        }
    },

    async login(req, res) {
        try {
            //find user according to what was passed
            const {
                email,
                password
            } = req.body
            const user = await User.findOne({
                where: {
                    email: email
                }
            })
            if (!user) {
                return res.status(403).send({
                    error: 'the login information is incorrect'
                })
            }
            const isPasswordValid = password === user.password
            if (!isPasswordValid) {
                return res.status(403).send({
                    error: 'the login information is incorrect'
                })
            }

            const userJson = user.toJSON()

            res.send({
                user: userJson
            })
        } catch (err) {
            //error such as user already exists
            res.status(500).send({
                error: 'Invalid Login Infoz'
            })
        }
    }
}