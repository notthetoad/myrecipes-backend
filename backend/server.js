const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors({ credentials: "include" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/register', require('./routes/register'));
app.use('/recipes', require('./routes/recipes'));
app.use('/login', require('./routes/login'));

const PORT = 5000;

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})
