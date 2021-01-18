-- create table users
CREATE TABLE users (
	user_id INTEGER PRIMARY KEY,
	login TEXT NOT NULL UNIQUE,
	password TEXT NOT NULL
);

-- create recipes table
CREATE TABLE recipes (
	recipe_id INTEGER PRIMARY KEY,
	title TEXT,
	author TEXT,
	ingredients TEXT,
	portion_size TEXT,
	steps TEXT,
	user_id INTEGER,
	FOREIGN KEY (user_id) REFERENCES users (user_id)
);