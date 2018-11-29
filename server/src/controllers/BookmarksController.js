const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const {
    Bookmark
} = require('../models')


module.exports = {

    //get song
    async index(req, res) {
        
        try {
            console.log('search!!!!')
            //let songs = null
            const {songId, userId} = req.query

            console.log('search for: ' + songId)
            //const userId = req.user.id

            console.log('search for: ' + songId + ' userId ' + userId)

            const bookmark = await Bookmark.findOne({
                where: {
                    SongId: songId
                }
            })

            res.send(bookmark)
            //sends songs back
            //res.send(songs)

        } catch (err) {
            //error such as user already exists
            res.status(500).send({
                error: 'Error occured while trying to find songs'
            })
        }
    },

        //add bookmark
    async post(req, res) {
        try {

            //const {bookmark} = req.body
            const {songId, userId} = req.body

            
            console.log('user id: ' + userId + ' songId:' + songId)

            //check if bookmark exists
            const bookmark = await Bookmark.findOne({
                where: {
                    SongId: songId,
                    UserId: userId
                }
            })

            if(bookmark){
                console.log ('exists')
                return res.status(400).send({
                    error: 'bookmark already exists.'
                })
            }else{
                console.log ('not exists')
            }

            //create bookmark
            const newBookmark = await Bookmark.create({
                SongId: songId,
                UserId: userId
            })

            res.send(newBookmark)

        } catch (err) {
            //error such as user already exists
            res.status(500).send({
                error: 'Error occured while trying to create a bookmark'
            })
        }
    },

    async delete(req, res) {
        try {

            const {bookmarkId} = req.params

            console.log('bookmarkId for: ' + bookmarkId)

            const bookmark = await Bookmark.findById(bookmarkId)
            await bookmark.destroy()
            res.send(bookmark)
            //sends songs back
            //res.send(songs)

        } catch (err) {
            //error such as user already exists
            res.status(500).send({
                error: 'Error occured while trying to destroy bookmark'
            })
        }
    }

}