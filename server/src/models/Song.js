

module.exports = (sequelize, DataTypes) => {

    const Song = sequelize.define('Song', {
        title: DataTypes.STRING,
        artist: DataTypes. STRING,
        genre: DataTypes. STRING,
        album: DataTypes. STRING,
        youtubeId: DataTypes. TEXT,
        albumImageUrl: DataTypes. TEXT,
        tab: DataTypes. TEXT,
        })


    return Song
}


