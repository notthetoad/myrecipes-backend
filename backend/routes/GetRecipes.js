const express = require('express');
const router = express.Router();
const db = require('../database/database');
const authorizeToken = require('../middleware/authorizeToken');

router.get('/', authorizeToken, (req, res) => {
	const sql = 'SELECT * FROM recipes WHERE user_id = ?'
	const { id } = req.user;
	
	db.all(sql, [id], async (err, rows) => {
		if (err) res.status(400).json({ "message": err.message })
		if (rows) {
			await res.status(200).json({ "recipes": rows})
		} else {
			res.status(404).json({ "message": "no recipes for this user" })
		}
		}
	)
})

module.exports = router;