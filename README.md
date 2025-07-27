
# URL Shortener

This is a full-stack URL shortener application built with the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to shorten long URLs, and registered users can track their shortened URLs.

## Features

-   **Shorten URLs**: Anonymous users can quickly shorten long URLs.
-   **User Authentication**: Users can sign up and log in to manage their URLs.
-   **Dashboard**: Registered users can view a list of their shortened URLs.
-   **Redirection**: The shortened URLs redirect to the original long URLs.
-   **Responsive UI**: The frontend is built with React and Tailwind CSS for a modern and responsive user experience.

## Tech Stack

**Backend:**

-   [Node.js](https://nodejs.org/)
-   [Express.js](https://expressjs.com/)
-   [MongoDB](https://www.mongodb.com/)
-   [Mongoose](https://mongoosejs.com/)
-   [JWT (JSON Web Tokens)](https://jwt.io/) for authentication
-   [bcryptjs](https://www.npmjs.com/package/bcryptjs) for password hashing
-   [nanoid](https://www.npmjs.com/package/nanoid) for generating short IDs

**Frontend:**

-   [React](https://reactjs.org/)
-   [Vite](https://vitejs.dev/)
-   [Tailwind CSS](https://tailwindcss.com/)

**Development:**

-   [Concurrently](https://www.npmjs.com/package/concurrently) to run backend and frontend servers simultaneously.
-   [Nodemon](https://nodemon.io/) for automatic server restarts during development.

## Getting Started

### Prerequisites

-   Node.js (v14 or higher)
-   npm
-   MongoDB (local instance or a cloud-based solution like MongoDB Atlas)

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/MoAftaab/url_shortner.git
    cd url_shortner
    ```

2.  **Install backend dependencies:**
    ```bash
    cd BACKEND
    npm install
    ```

3.  **Install frontend dependencies:**
    ```bash
    cd ../FRONTEND
    npm install
    ```

4.  **Set up environment variables:**
    Navigate to the `BACKEND` directory and create a `.env` file based on `.env.example`:

    ```bash
    cd BACKEND
    cp .env.example .env
    ```

    Then edit the `.env` file and add your actual values:

    ```env
    MONGO_URI=your_mongodb_atlas_connection_string
    APP_URL=http://localhost:3000
    JWT_SECRET=your_secure_secret_key
    ```

    **⚠️ IMPORTANT:** Never commit the `.env` file to version control. It contains sensitive credentials.

### Running the Application

You can run both the backend and frontend servers with a single command from the root directory:

```bash
npm run dev
```

This will start:
- The backend server on `http://localhost:3000`
- The frontend development server on `http://localhost:5173` (or another available port).

## API Endpoints

The backend exposes the following RESTful API endpoints:

-   `POST /api/create`: Creates a new short URL.
-   `GET /:id`: Redirects a short URL to its original long URL.
-   `POST /api/auth/signup`: Registers a new user.
-   `POST /api/auth/login`: Logs in a user.
-   `GET /api/user/me`: Retrieves the current user's profile.

## Folder Structure

```
url_shortner/
├── BACKEND/
│   ├── node_modules/
│   ├── package.json
│   ├── package-lock.json
│   ├── .env
│   ├── app.js        # Express app entry point
│   └── SRC/
│       ├── config/   # Database and app configuration
│       ├── controller/ # Request handlers
│       ├── dao/      # Data Access Objects (interacts with the database)
│       ├── middleware/ # Express middleware
│       ├── models/   # Mongoose schemas and models
│       ├── routes/   # API routes
│       ├── services/ # Business logic
│       └── utils/    # Utility functions
├── FRONTEND/
│   ├── public/
│   ├── src/          # React application source code
│   ├── package.json
│   └── ...
└── package.json      # Root package.json for concurrently script
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add some feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Open a pull request.

## License

This project is licensed under the MIT License.
