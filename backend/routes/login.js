const express = require('express');
const router = express.Router();
const db = require('../database/database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/', async (req, res) => {
	const { login, password } = req.body;

	let sql = 'SELECT DISTINCT login, password, user_id FROM users WHERE login = ?'

	if (!login || !password) {
		res.status(400).json({ "message": "Enter all fields" })
	} else {
		db.get(sql, [login], async (err, row) => {
			if (err) {
				console.log(err.message);
			}
			if (row.login) {
				if (await bcrypt.compare(password, row.password)) {
					const user = {id: row.user_id, login: row.login}
					const accessToken = jwt.sign(user, process.env.JWT_TOKEN_SECRET)
					res.status(200).json({ "message": "success", "jwt": accessToken })
				} else {
					res.status(400).json({ "message": "Invalid password" })
				}
			}
		})
	}
})

module.exports = router;