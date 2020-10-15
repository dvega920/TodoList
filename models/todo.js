let mongoose = require('mongoose');

let toDoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name cannot be blank!'
    },
    completed: {
        type: Boolean,
        default: false
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

let ToDo = mongoose.model('ToDo', toDoSchema);

module.exports = ToDo;
