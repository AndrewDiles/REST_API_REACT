# REST_API_REACT

## RESTful API

An API allows two applications communicate with each other.

REST is a set of guidelines for designing networked applications.

**RE**presentational: basic data type (JSON/XML).
**S**tateless: requests contain all information required to perform action.
**T**ransfer: happens via the HTTP methods (several other means exist)

An API is **REST**ful if it follows these guidelines.

## HTTP Methods

| CRUD       | HTTP Method       | HTTP Code  |
| ---------- | ----------------- | ---------- |
| **C**reate | `POST`            | 201        |
| **R**ead   | `GET`             | 200        |
| **U**pdate | `PUT` and `PATCH` | 204 or 200 |
| **D**elete | `DELETE`          | 204 or 200 |

## fetch

In JS, `fetch` is function that returns a Promise and makes HTTP requests.

For GET requests, `fetch` needs one argument:
```js
// absolute path => violate CORS policies?
const response = await fetch("https://www.google.com/");

// relative path => fetching to local server
const response = await fetch("/awesome-people");
```

We'll see later how to use `fetch` with other HTTP methods.


## Connecting React to API

To `fetch` to our api/server using React we can use relative or absolute paths.

With absolute paths, we'll encounter a CORS violation unless the server uses `cors` middleware to accept requests from our React's domain.

If you pass `fetch` a relative path, React will `fetch` to its own server, and receive an HTML document, unless we set up a "proxy".

## Demonstration:

(to be shipped on _solution_ branch)

- Start up the (API) Express Server
- Start up the React environment
- **GET** the users from the `/v1/users` endpoint
- Render them using the `<Users>` component
- Create a component to **POST** a new user.