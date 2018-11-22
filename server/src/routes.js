const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolity = require('./policies/AuthenticationControllerPolicy')

const SongsController = require('./controllers/SongsController')

//in express, once thge register end point is hit,
//the following middleware will be invoked 
module.exports = (app) => {
    app.post('/register',
        AuthenticationControllerPolity.register,
        AuthenticationController.register
    )

    app.post('/login',
        AuthenticationController.login
    )

    //listed for get request on the songs endpoint    
    app.get('/songs',
        SongsController.index
    )

    //listed for get request on the songs endpoint    
    app.get('/songs/:songId',
        SongsController.show
    )


    //end point to create songs 
    app.post('/songs',
        SongsController.post
    )

    //end point to edit songs 
    app.put('/songs/:songId',
        SongsController.put
    )

}