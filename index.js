const express = require('express');
const userAuthRoute =  require("./routes/auth")
const bookRoute =  require('./routes/book')
const app =  express()
app.use(express.json());
app.use(express.urlencoded({extended: true}));


/////////////////////////////////////////////////////
app.use('/api/user',userAuthRoute)

app.use('/api/book',bookRoute)



app.use(express.urlencoded({ extended: false }));



const mongoose = require('mongoose');
//////////////////////////////////////////////

mongoose
  .connect(
    'mongodb://db:27017/demo',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


app.listen(3000,()=>{
    console.log('My Rest APi at 30000')
})