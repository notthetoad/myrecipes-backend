const express = require('express');
const router = express.Router();
const db = require('../database/database');
const authorizeToken = require('../middleware/authorizeToken');

router.get('/', authorizeToken, (req, res) => {
	const sql = 'SELECT * FROM recipes WHERE user_id = ?'
	const { id } = req.user;
	
	db.all(sql, [id], (err, rows) => {
		if (err) {
			console.log(err);
		}
		rows.forEach(row => {
			console.log(req.user)
			if (row.user_id === req.user.id) {
				console.log(row)
			} else {
				console.log('no recipes for this user')
			}
		})
	})
})

module.exports = router;