const { v4 } = require('uuid');
const users = require("./initial_users.json");

// Simulating the delay expected with a database

const delayedResponse = (res, status, body) => {
	setTimeout(()=>{
		res.status(status).json({...body, status})
	}, Math.random()*1000 + 500)
}


const getUsers = (req, res) => {
	delayedResponse(res, 200, {users});
}

const addUser = (req, res) => {
	// validation of incoming data in body

	if (!req.body) {
		return delayedResponse(res, 400, {error: "Request must include a body."});
	}

	const name = req.body.name;
	const favColor = req.body["favorite-color"];

	if (!name || typeof name !== "string") {
		return delayedResponse(res, 400, {error: "body must include a key \"name\" of type String."});
	}
	if (!favColor || typeof favColor !== "string") {
		return delayedResponse(res, 400, {error: "body must include a key \"favorite-color\" of type String."});
	}

	// verify if the user with incoming name is already present

	const userAlreadyExists = users.find(user=>user.name === name);

	if (userAlreadyExists) {
		return delayedResponse(res, 409, {error: `A user named ${name} already exists.`});
	}

	// validation passes, create new user and respond with new information

	const newUser = {
		_id: v4(),
		name,
		"favorite-color" : favColor
	}

	users.push(newUser)

	delayedResponse(res, 201, {inserted_id: newUser._id});
}

module.exports = {
	getUsers,
	addUser
}