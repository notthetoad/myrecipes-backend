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

	db.all(sqlCheck, [login], (err, rows) => {
		if (err) {
			res.status(500).json({ "error": err.message })
		}
		if (rows.length > 0) {
			res.json({ "message": "User already exists" })
		} else {
			db.run(sqlInsert, [login, hashedPassword], err => {
				if (err) {
					res.status(500).json({"error": err.message})
				}
			})
		}
	})
})

module.exports = router;


// sprawdzac czy sa bledy jesli tak err 500;
// jesli nie ma bledu to jest null;
// zwraca pusty array nawet jesli nie ma usera;
// jesli jest pusty array to zarejestrowac;
