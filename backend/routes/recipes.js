const express = require('express');
const router = express.Router();
const db = require('../database/database');

router.post('/', (req, res) => {
	const { title, author, ingredients, portionSize, steps } = req.body;
	const sqlInsert = `INSERT INTO recipes (title, author, ingredients, portion_size, steps) VALUES (?, ?, ?, ?, ?)`;

	const params = [title, author, ingredients, portionSize, steps];

	db.run(sqlInsert, params, err => {
		if (err) {
			// res.json({ "message": "Could not send recipe" });
			console.log(err.message)
		}
		res.status(200).json({"message": "Recipe succesfully added" })
	}) 	
});

module.exports = router;