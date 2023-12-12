# CRUD API using Node.js, Express, and MongoDB

This repository contains a CRUD (Create, Read, Update, Delete) API built with Node.js, Express, and MongoDB.

## Overview

This API provides endpoints to perform CRUD operations on a collection of products. It follows RESTful principles and includes basic error handling.

## Features

- GET `/products`: Retrieve all products
- GET `/products/:id`: Retrieve a specific product by ID
- POST `/products`: Create a new product
- PUT `/products/:id`: Update an existing product by ID
- DELETE `/products/:id`: Delete an product by ID

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/arield13/Node-Mongo-CRUD-API.git

# 1 Install dependencies:
cd crud-node-express-mongodb
npm install

# 2 Start the server:
node src/app.js

# Usage

Make requests to the API using tools like Postman or cURL.
Endpoint examples:
    GET http://localhost:3000/products
    POST http://localhost:3000/products
    PUT http://localhost:3000/products/:id
    DELETE http://localhost:3000/products/:id



