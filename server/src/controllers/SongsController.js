const {
    User
} = require('../models')


module.exports = {
        //get song
        async index (req, res) {
            try {
                //return all songs
                    const song = Song.create(req.body)
                    res.send(song)
                
            } catch (err) {
                //error such as user already exists
                res.status(500).send({
                    error: 'This account is already in use: ' + req.body.email
                })
            }
        }


    //create song
    async post(req, res) {
        try {
            //create song
            const song = Song.create(req.body)
            res.send(song)
            
        } catch (err) {
            //error such as user already exists
            res.status(500).send({
                error: 'This account is already in use: ' + req.body.email
            })
        }
    }
}