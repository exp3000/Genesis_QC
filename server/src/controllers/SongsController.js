const {
    Song
} = require('../models')


module.exports = {

        //get song
        async index (req, res) {
            try {
                //return all songs
                    const songs = await Song.findAll({
                        limit: 10
                    })
                    //sends songs back
                    res.send(songs)
                
            } catch (err) {
                //error such as user already exists
                res.status(500).send({
                    error: 'Error occured while trying to find songs'
                })
            }
        },


    //create song
    async post(req, res) {
        console.log('here 3')
        try {
  
            //create song
            const song = await Song.create(req.body)
            res.send(song)
            
        } catch (err) {
            //error such as user already exists
            res.status(500).send({
                error: 'Error occured trying to create a song'
            })
        }
    }
}