const express = require('express');
const userAuthRoute = express.Router();

const {registerUser,loginUser}  = require('../controller/UserController')


userAuthRoute.post('/register',registerUser);
userAuthRoute.post('/login',loginUser);


module.exports = userAuthRoute;