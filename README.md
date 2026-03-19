# ZerbitzariTxikiBat (Basic Node.js Server)

![Node.js](https://img.shields.io/badge/Node.js-%3E%3D_18-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-v5.x-000000?style=for-the-badge&logo=express&logoColor=white)

A lightweight Node.js server built with the Express framework. This repository contains an introductory practice project developed for the **Web Systems** course to demonstrate the fundamentals of building RESTful APIs and handling HTTP requests without the complexity of a persistent database.

## Core features

* **REST API Endpoints:** Implements standard HTTP methods to interact with user data (written in Basque):
  * `GET /erabiltzaileak`: Retrieves the list of all users.
  * `GET /erabiltzaileak/:id`: Retrieves a specific user by their ID.
  * `POST /erabiltzaileak`: Creates a new user in the system.
* **In-Memory Storage:** Uses a simple Javascript array to act as a volatile data store, mimicking database operations (read/write) for immediate feedback during development.
* **Request Testing:** Includes a `test.http` file configured for IntelliJ IDEA / WebStorm to easily execute HTTP requests and test the API endpoints without needing a frontend client or Postman.

## Architecture & Configuration

The application is structured as a monolithic single-file server (`app.js`) to keep the learning curve focused on Express middleware and routing mechanics:

1. **Framework (Express 5):** Handles routing, middleware chaining, and request parsing (JSON bodies).
2. **Environment:** Designed to run locally. Dependencies are managed via `npm` (`package.json` and `package-lock.json`).
3. **IDE Setup:** Contains `.idea` configuration files tailored for JetBrains IDEs, including HTTP client settings and Java/Node environment mappings.

## What I learned

This practice project was essential for grasping the core concepts of backend web development. It taught me how to set up an Express server from scratch, how to parse incoming JSON request bodies, and how to structure RESTful routes using path parameters. Working with an in-memory array also highlighted the importance of data persistence and the limitations of volatile memory in server applications.
