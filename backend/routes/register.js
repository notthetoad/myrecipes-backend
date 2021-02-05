const db = require('../database/database');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
	const  { login, password } = req.body;

	const sqlCheck = 'SELECT login FROM users WHERE login = ?'
	const sqlInsert = 'INSERT INTO users (login, password) VALUES (?, ?)';
	
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt) 

	if (!login || !password) {
		res.status(400).json({ "message": "Enter all fields" });
		return;
	}
	else if (password.length < 3) {
		res.status(400).json({ "message": "Password cannot be shorter than 3 characters"})
	} else {
		db.all(sqlCheck, [login], (err, rows) => {
			if (err) {
				res.status(500).json({ "error": err.message })
			}
			if (rows.length > 0) {
				res.status(400).json({ "message": "User already exists" })
			} else {
				db.run(sqlInsert, [login, hashedPassword], err => {
					if (err) {
						res.status(500).json({"error": err.message})
					}
					res.status(200).json({ "message": "Successfully registered"})
				})
			}
		})
	}
})

module.exports = router;
