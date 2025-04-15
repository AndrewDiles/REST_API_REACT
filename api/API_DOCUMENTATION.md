# API_DOCUMENTATION

## Introduction

This server will behave as an API that interacts to HTTP requests related to its users.

## Running the API

Install your dependencies.

Execute the command `yarn start` from within the `/api` folder.

You can quickly test an endpoint in your browser at:


[GET the users at http://localhost:8042/api/users](http://localhost:8042/api/users)

## The Data

The initial users can be found in `/api/initial_users.json`.

Each user object (or document) has the shape:

```js
{
	"_id": Type String, // instances of uuidv4
	"name" : Type String,
	"favorite-color": Type String
}
```

These users are held in memory, resetting alongside the server.

## The Endpoints

### GET `/api/users`

Response object:

```js
{
	"status": 200,
	"users" : [] // Array of user objects / documents
}
```

### POST `/api/user`

Expected body:

```js
{
	"name": Type String,
	"favorite-color": Type String
}
```

Successful Response object:

```js
{
	"status": 201,
	"inserted_id" : Type String, // instance of uuidv4
}
```

Error Response Object

```js
{
	"status": 400 || 409,
	"error" : Type String, // Explains the issue
}
```