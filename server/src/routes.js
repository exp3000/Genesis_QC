const AuthenticationController = require('./controllers/AuthenticationController')

const AuthenticationControllerPolity = require('./policies/AuthenticationControllerPolicy')

//in express, once thge register end point is hit,
//the following middleware will be invoked 
module.exports = (app) => {
    app.post('/register', 
    AuthenticationControllerPolity.register,
    AuthenticationController.register
    )
}
