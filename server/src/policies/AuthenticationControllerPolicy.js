const Joi = require('joi')
//validate email and username
//method has same name as the ceontroller method (register)
module.exports = {
    register(req, res, next) {

        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        }

        const {
            error
        } = Joi.validate(req.body, schema)

        //if calidation failed
        if (error) {
            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: 'You must provide a valid email address'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: 'You must password prvided failed to pass rules:<br>1. lower case, upper case <br> 2. It must be at least 8-32 characters'
                    })
                    break
                default:
                    res.status(400).send({
                        error: 'Invalid registration info'
                    })
            }

        } else {
            next()
        }

   
    }
}