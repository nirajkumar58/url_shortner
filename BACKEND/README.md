# Backend API

This is the backend for the URL Shortener application, built with Node.js, Express, and MongoDB.

## Features

-   RESTful API for creating and managing short URLs.
-   User authentication using JWT.
-   Password hashing with bcrypt.
-   Mongoose for interacting with MongoDB.

## Getting Started

### Prerequisites

-   Node.js (v14 or higher)
-   npm
-   MongoDB connection string

### Setup

1.  Navigate to the `BACKEND` directory:
    ```bash
    cd BACKEND
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Create a `.env` file in this directory with the following content:
    ```env
    MONGO_URI=<your_mongodb_connection_string>
    APP_URL=http://localhost:3000
    JWT_SECRET=<your_jwt_secret_key>
    ```

### Running the Server

To start the development server with automatic restarts on file changes, run:

```bash
npm run dev
```

The server will start on `http://localhost:3000`.

## API Endpoints

### Unauthenticated Routes

-   `POST /api/create`
    -   Creates a short URL.
    -   **Body**: `{ "original_url": "https://example.com" }`
    -   **Response**: `{ "short_url_id": "some_id", "short_url": "http://localhost:3000/some_id" }`

-   `GET /:id`
    -   Redirects to the original URL.
    -   **Params**: `id` - The short URL ID.

### Authentication Routes (`/api/auth`)

-   `POST /signup`
    -   Registers a new user.
    -   **Body**: `{ "name": "Test User", "email": "test@example.com", "password": "password123" }`

-   `POST /login`
    -   Logs in a user and returns a JWT in an `httpOnly` cookie.
    -   **Body**: `{ "email": "test@example.com", "password": "password123" }`

### User Routes (`/api/user`)

-   `GET /me`
    -   Requires authentication.
    -   Returns the profile of the currently logged-in user.
