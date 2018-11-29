const {
    sequelize,
    Song,
    User,
    Bookmark
} = require('../src/models')

const Promise = require('bluebird')
const songs = require('./songs.json')
const users = require('./user.json')
const bookmark = require('./bookmark.json')

sequelize.sync({
        force: true
    })
    .then(async function () {
        await Promise.all(
            users.map(user => {
                User.create(user)
            })
        )

        await Promise.all(
            songs.map(song => {
                Song.create(song)
            })
        )

        //has to come after user and song

        // await Promise.all(
        //     bookmark.map(bookmark => {
        //         Bookmark.create(bookmark)
        //     })
        // )

    })
