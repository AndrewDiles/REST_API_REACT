const { v4 } = require('uuid');
const users = require("./initial_users.json");

const getUsers = (req, res) => {
	res.status(200).json({status: 200, users})
}

const addUser = (req, res) => {

	// validation of incoming data in body

	if (!req.body) {
		return res.status(400).json({status: 400, error: "Request must include a body."})
	}

	const name = req.body.name;
	const favColor = req.body["favorite-color"];

	if (!name || typeof name !== "string") {
		return res.status(400).json({status: 400, error: "body must include a key \"name\" of type String."})
	}
	if (!favColor || typeof favColor !== "string") {
		return res.status(400).json({status: 400, error: "body must include a key \"favorite-color\" of type String."})
	}

	// verify if the user with incoming name is already present

	const userAlreadyExists = users.find(user=>user.name === name);

	if (userAlreadyExists) {
		return res.status(409).json({status: 409, error: `A user named ${name} already exists.`})
	}

	// validation passes, create new user and respond with new information

	const newUser = {
		_id: v4(),
		name,
		"favorite-color" : favColor
	}

	users.push(newUser)

	res.status(201).json({status: 201, inserted_id: newUser._id})
}

module.exports = {
	getUsers,
	addUser
}