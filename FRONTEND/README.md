# Frontend

This is the frontend for the URL Shortener application, built with React, Vite, and Tailwind CSS.

## Features

-   Modern, responsive UI for shortening URLs.
-   User-friendly forms for signup and login.
-   Dashboard to display a user's shortened URLs.
-   "Copy to clipboard" functionality for shortened URLs.

## Getting Started

### Prerequisites

-   Node.js (v14 or higher)
-   npm

### Setup

1.  Navigate to the `FRONTEND` directory:
    ```bash
    cd FRONTEND
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

### Running the Development Server

To start the Vite development server, run:

```bash
npm run dev
```

The frontend will be available at `http://localhost:5173` (or the next available port).

The development server is configured to proxy API requests to the backend server running on `http://localhost:3000`.

## Building for Production

To create a production build of the frontend, run:

```bash
npm run build
```

The optimized static assets will be placed in the `dist` directory.

