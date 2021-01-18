const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./database/main.db', sqlite3.OPEN_READWRITE, err => {
	if (err) {
		console.log(err.message)
	}
	console.log('connected to main.db');
})

module.exports = db;