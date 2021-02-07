const express = require('express');
const router = express.Router();
const db = require('./../database/database');
const jwt = require('jsonwebtoken');

router.post('/', (req, res) => {
	const refreshToken = req.body.refreshToken

	let sql = 'SELECT DISTINCT refresh_token FROM users WHERE refresh_token = ?'

	if (refreshToken === null) return res.status(401).json({ "message": "token is null" })
	db.run(sql, [refreshToken], err => {
		if (err) res.status(403).json({ "message": "access forbidden" })
		jwt.verify(refreshToken, process.env.JWT_REFRESH_TOKEN_SECRET, (err, decoded) => {
			if (err) return res.status(403).json({ "mesage": "access forbidden" })
			const accessToken = jwt.sign({ name: decoded.name }, process.env.JWT_TOKEN_SECRET, { expiresIn: '15s'}) // change to 10m after testing
			res.status(200).json({ "accessToken": accessToken})
		})
	})
})

module.exports = router;