# Express Blog API

### Author : Lujain Al-Jarrah
### Version : 1.0.0

## Overview

This is an Express.js-based RESTful API for managing blog posts. It provides endpoints for creating, retrieving, updating, and deleting blog posts. The API is designed to handle CRUD operations on blog posts with user authentication and image uploads.

## Installation

1. Clone the repository: `git clone https://github.com/Lujain92/express-blog-API.git`
2. Navigate to the project directory: `cd express-blog-API`
3. Install dependencies: `npm install`

## Configuration

1. Set up a MongoDB database and obtain connection credentials.
2. Configure the database connection in the application using environment variables or directly in the `util/database.js` file.

## Usage

### Running the Application

Run the application using:

```bash
npm start
```

The API will start on `http://localhost:8082`.

### Endpoints

- `GET /posts`: Retrieve all blog posts.
- `GET /post/:postId`: Retrieve a specific blog post by ID.
- `POST /post`: Create a new blog post.
- `PUT /post/:postId`: Update a specific blog post by ID.
- `DELETE /post/:postId`: Delete a specific blog post by ID.
- `POST /signup`: User signup with email, password, and name.
- `POST /login`: User login with email and password to receive an authentication.


### Dependencies

- `express`: Web application framework for Node.js
- `mongodb`: Official MongoDB driver for Node.js
- Other dependencies can be found in `package.json`

