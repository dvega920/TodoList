let express = require('express'),
    app = express(),
    PORT = process.env.PORT || 3000,
    bodyParser = require('body-parser');

let todosRoutes = require('./routes/todos')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.send("HELLO FROM THE ROOT ROUTE");
});

app.use('/api/todos', todosRoutes);



app.listen(PORT, function () {
    console.log(`APP IS LISTENING ON PORT: ${PORT}`)
})