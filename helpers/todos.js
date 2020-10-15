let db = require('../models');

exports.getTodos = function (req, res) {
    db.ToDo.find()
        .then(function (todos) {
            res.json(todos);
        })
        .catch(function (err) {
            res.send(err);
        })
}

exports.createTodos = function (req, res) {
    db.ToDo.create(req.body)
        .then(function (newTodo) {
            res.status(201).json(newTodo);
        })
        .catch(function (err) {
            res.send(err);
        })
}

exports.getTodo = function (req, res) {
    db.ToDo.findById(req.params.todoId)
        .then(function (foundTodo) {
            console.log(foundTodo);
            res.json(foundTodo);
        })
        .catch(function (err) {
            res.send(err);
        })
}

exports.updateTodo = function (req, res) {
    db.ToDo.findOneAndUpdate({ _id: req.params.todoId }, req.body, { new: true })
        .then(function (todo) {
            res.json(todo);
        })
        .catch(function (err) {
            res.send(err);
        })
}

exports.deleteTodo = function (req, res) {
    db.ToDo.remove({ _id: req.params.todoId })
        .then(function () {
            res.json({ message: "We deleted it!" });
        })
        .catch(function (err) {
            res.send(err);
        });
}

module.exports = exports;