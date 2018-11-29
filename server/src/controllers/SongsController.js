const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const {
    Song
} = require('../models')


module.exports = {

    //get song
    async index(req, res) {
        try {
            let songs = null
            const search = req.query.search
            console.log('search for: ' + search)
            //respond to search
            if (search) {

                console.log('searching...')
                songs = await Song.findAll({
                    where: {
                        [Op.or]: [{
                                title: {
                                    [Op.like]: '%' + search + '%'
                                }
                            },
                            {
                                album: {
                                    [Op.like]: '%' + search + '%'
                                }
                            },    {
                                artist: {
                                    [Op.like]: '%' + search + '%'
                                }
                            }

                            // etc.
                        ]
                    }
                })

            } else {
                console.log('not searching')
                //return all songs



                songs = await Song.findAll({
                    limit: 10
                })
            }

            res.send(songs)
            //sends songs back
            //res.send(songs)

        } catch (err) {
            //error such as user already exists
            res.status(500).send({
                error: 'Error occured while trying to find songs'
            })
        }
    },
    //get one songs
    async show(req, res) {
        try {

            const song = await Song.findById(req.params.songId)
            res.send(song)
        } catch (err) {
            //error such as user already exists
            res.status(500).send({
                error: 'Error occured while trying to find songs'
            })
        }
    },

    //create song
    async post(req, res) {

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
    },

    //edit song
    async put(req, res) {

        try {

            //create song
           await Song.update(req.body, {
                where: {
                    id: req.params.songId
                }
            })
            res.send(req.body)

        } catch (err) {
            //error such as user already exists
            res.status(500).send({
                error: 'Error occured trying to update a song'
            })
        }
    }

}