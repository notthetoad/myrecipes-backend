const express = require('express');
const router = express.Router();
const db = require('../database/database');
// compare hashed password with password sent by the user with bcrypt;
// get password from rows.password if not error;

router.get('/', (req, res) => {
	const { login, password } = req.body;

	let sql = 'SELECT DISTINCT (?, ?) FROM users'

	db.all(sql, [login, password], (err, rows) => {
		if (err) {
			console.log(err.message);
		}
		if (rows) {
			console.log(rows);
		}
	})
})

module.exports = router;