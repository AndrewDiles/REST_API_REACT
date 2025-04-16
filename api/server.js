const express = require("express");
const PORT = 8042;

const {
	getUsers,
	addUser
} = require("./handlers");

const app = express();

// request logging feedback for testing
app.use((req, res, next)=>{
	console.log(req.method, " request made to ", req.path)
	next();
})

// parses Content-Type of application/json into JS object in request's body
app.use(express.json())

app.get("/v1/users", getUsers);

app.post("/v1/users", addUser);

app.use((req, res) => {
	res.status(404).json({status: 404, message:"This isn't the endpoint you're looking for. Double check your URL and METHOD."})
})

app.listen(PORT, ()=>{
	console.log("API live on PORT ", PORT);
	
})