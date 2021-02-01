const db = require('./database/database');

let sql = 'SELECT * FROM recipes WHERE user_id = 2'

db.all(sql, [], (err, rows) => {
	let arr = [];
	if (err) console.log(err.message)
	rows.forEach(row => {
		arr.push(row)
		console.log(arr)
	})
})

// db.each(sql, [], (err, row) => {
// 	let arr = [];
// 	if (err) console.log(err);
// 	if (row) {
// 		arr.push(row);
// 		console.log(arr)
// 	} else {
// 		console.log('no recipes')
// 	}
// })