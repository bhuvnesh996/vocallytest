const express = require('express');
const bookRoute= express.Router();
const authenticateUser =  require('../Middleware/authUser')

const {createBook,deleteBook,updateBook}  = require('../controller/BookController')


bookRoute.post('/addbook',authenticateUser,createBook);
bookRoute.delete('/deletebook/:id',authenticateUser,deleteBook);
bookRoute.put('/updatebook/:id',authenticateUser,updateBook);


module.exports = bookRoute;
