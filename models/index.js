let mongoose = require('mongoose');
mongoose.set('debug', true); //Optional

// connect to database server
mongoose.connect('mongodb://localhost/todo-api',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }),
    mongoose.Promise = Promise; //allows the use of .then() and .catch() instead of writing callbacks.

module.exports.ToDo = require("./todo")