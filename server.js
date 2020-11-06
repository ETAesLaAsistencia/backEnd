const express = require('express');
const session = require('express-session');
const connectMongo = require('connect-mongo');
const mongoose = require('mongoose');


// Initializations
const app = express();


// settings
app.set('port', process.env.PORT || 4000);


//middlewares
const MongoStore = connectMongo(session);
app.use(
    session({
        secret: 'secret',
        resave:true,
        saveUninitialized:true,
        store:new MongoStore({mongooseConnection: mongoose.connection}),
    })
);




module.exports = app;