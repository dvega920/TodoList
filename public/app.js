$(document).ready(function () {
    $.getJSON("/api/todos")
        .then(addTodos)
});

function addTodos(todos) {
    todos.forEach(function (todo) {
        let newTodo = $('<li>' + todo.name + '<li>');
        newTodo.addClass('task');
        if (todo.completed) {
            newTodo.addClass('done');
        }
        $('.list').append(newTodo);
    })
}