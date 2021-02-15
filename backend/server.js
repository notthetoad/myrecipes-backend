const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config()

const app = express();

app.use(cors({ credentials: "include" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/register', require('./routes/register'));
app.use('/login', require('./routes/login'));
app.use('/postrecipes', require('./routes/PostRecipes'));
app.use('/getrecipes', require('./routes/GetRecipes'));
app.use('/deleterecipes', require('./routes/DeleteRecipes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})
