const Controller = require('./userController')

module.exports = [
    {method: 'POST',
     path: '/createUser', 
     handler: Controller.createUser},
     {
      method: 'POST',
      path: '/loginUser',
      handler: Controller.userAuthController
     }
];
