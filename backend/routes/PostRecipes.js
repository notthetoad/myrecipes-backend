const express = require('express');
const router = express.Router();
const db = require('../database/database');
const authorizeToken = require('../middleware/authorizeToken');

router.post('/', authorizeToken, (req, res) => {
	const { title, author, ingredients, portionSize, steps } = req.body.data;
	const { id } = req.user;
	const sqlInsert = `INSERT INTO recipes (title, author, ingredients, portion_size, steps, user_id) VALUES (?, ?, ?, ?, ?, ?)`;

	const params = [title, author, ingredients, portionSize, steps, id];

	db.run(sqlInsert, params, err => {
		if (err) {
			console.log(err.message)
		}
		// res.status(200).json({"message": "Recipe succesfully added" })
		res.status(200).json({ title: title, author: author, ingredients: ingredients, portionSize: portionSize, steps: steps, user_id: id })
	}) 	
});

module.exports = router;