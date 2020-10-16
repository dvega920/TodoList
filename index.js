let express = require('express'),
    app = express(),
    PORT = process.env.PORT || 3000,
    bodyParser = require('body-parser');

let todosRoutes = require('./routes/todos')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.get('/', function (req, res) {
    res.sendFile("index.html");
});

app.use('/api/todos', todosRoutes);



app.listen(PORT, function () {
    console.log(`APP IS LISTENING ON PORT: ${PORT}`)
})