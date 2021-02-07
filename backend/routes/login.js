const express = require('express');
const router = express.Router();
const db = require('../database/database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/', async (req, res) => {
	const { login, password } = req.body;

	let sql = 'SELECT DISTINCT login, password, user_id FROM users WHERE login = ?'
	let sqlInsert = 'INSERT INTO users (refresh_token) VALUES (?)'

	if (!login || !password) {
		res.status(401).json({ "message": "Enter all fields" })
	} else {
		db.get(sql, [login], async (err, row) => {
			if (err) {
				console.log(err.message);
			}
			else if (row) {
				if (await bcrypt.compare(password, row.password)) {
					const user = {id: row.user_id, login: row.login}
					const accessToken = generateAccessToken(user)
					const refreshToken = jwt.sign(user, process.env.JWT_REFRESH_TOKEN_SECRET)
					db.run(sqlInsert, [refreshToken], err => {
						if (err) console.log(err);
					})
					res.status(200).json({ "message": "success", "jwt": accessToken, 'refreshToken': refreshToken })
				} else {
					res.status(401).json({ "message": "Invalid password" })
				}
			} else {
				res.status(401).json({ "message": "Invalid login" })
			}
		})
	}
})

const generateAccessToken = (user) => {
	return jwt.sign(user, process.env.JWT_TOKEN_SECRET, { expiresIn: '15s'}) // Change to 10 min after testing
}

exports.generateAccessToken = generateAccessToken;
module.exports = router;