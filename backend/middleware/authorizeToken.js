const jwt = require('jsonwebtoken');

const authorizeToken = (req, res, next) => {
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];
	if (token === null) return res.status(401).send();

	jwt.verify(token, process.env.JWT_TOKEN_SECRET, (err, decoded) => {
		console.log('error', err);
		if (err) return res.status(403).send();
		req.user = decoded;
		next();
	})
}

module.exports = authorizeToken;

