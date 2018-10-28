const {User} = require('../models')

module.exports = {
    async register (req, res) {
        // res.send({
        //     message: 'User is ' + req.body.email
        // })
        try{
            //create new user
            const user = await User.create(req.body)
            res.send(user.toJSON())
        }catch(err){
            //error such as user already exists
            res.status(400).send(                {
                    error: 'This account is already in use: ' + req.body.email
                })
        }
        
       
    }
}