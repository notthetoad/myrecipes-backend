const express = require('express');
const router = express.Router();
const db = require('../database/database');
const authorizeToken = require('../middleware/authorizeToken');

router.delete('/', authorizeToken, (req, res) => {
	const { recipe_id } = req.body;
	const sql = 'DELETE FROM recipes WHERE recipe_id = ?';

	db.run(sql, [recipe_id], err => {
		if (err) console.log(err.message)
		res.status(200).json({ "message": "deleted recipe of id " + recipe_id})
	})
})

module.exports = router;