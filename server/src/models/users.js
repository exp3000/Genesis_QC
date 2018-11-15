const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))


//this takes user password and hashes it
function hashPassword(user, options) {
    const SALT_FACTOR = 8

    if (!user.changed('password')) {
        return;
    }

    return bcrypt
        .genSaltAsync(SALT_FACTOR)
        //this salts the password
        .then(salt => bcrypt.hashAsync(user.password, salt, null))
        //set password to hashed value
        .then(hash => {
            user.setDataValue('password', hash)
        })
}

//sequelize user model
module.exports = (sequelize, DataTypes) => {
    //const User added to have access to user
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
    }, {
        hooks: {
            //beforeCreate: hashPassword,
            //beforeUpdate: hashPassword,
            beforeSave: hashPassword
        }
    })

    //prototype method to be able to compare password in any user model
    User.prototype.comparePassword = function (password) {
        return bcrypt.compareAsync(password, this.password)
    }


    return User
}