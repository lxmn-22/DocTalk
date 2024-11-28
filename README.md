# DocTalk

Doctalk is a user-friendly web application designed to simplify the process of finding and booking appointments with qualified specialists. Whether you need a general physician, a cardiologist, or a dermatologist, Doctalk connects you with top-rated doctors in your area.

## Description

A [ReactJS](https://reactjs.org/) frontend application powered by [Vite](https://vitejs.dev/) and styled using [TailwindCSS](https://tailwindcss.com/). The backend is built with [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/), and [MongoDB](https://www.mongodb.com/) to provide a robust and scalable full-stack solution.

---

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/docs/manual/installation/) (Ensure MongoDB server is running locally or have a remote URI).

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/lxmn-22/DocTalk.git

cd DocTalk
```

---

## Installing Dependencies

### For the Frontend:

```bash
cd frontend

npm install
```

### For the Backend:

```bash
cd backend

npm install
```

### For the Admin:

```bash
cd admin

npm create vite@latest
npm install
```

## Running Project

### Running the Frontend

    1. Navigate to the frontend folder.
    2. Start the development server:

```bash
    npm run dev
```

    3. Open your browser and navigate to http://localhost:5173

### Running the Backend

    1. Navigate to the backend folder.
    2. Start the server:

```bash
    npm run server
```

    3. The backend API will run on http://localhost:5000 (or the port specified in your .env).

### Running the Admin

    1. Navigate to the admin folder.
    2. Start the development server:

```bash
    npm run dev
```

    3. Open your browser and navigate to http://localhost:5174

## npm Dependencies

### Frontend

- **react**, **react-dom**: Core React libraries.
- **vite**: Development tool for frontend.
- **tailwindcss**, **postcss**, **autoprefixer**: Styling framework.

### Backend

- **express**: Web framework for Node.js.
- **mongoose**: MongoDB object modeling.
- **multer**: Node.js middleware used for handling multipart/form-data, primarily for uploading files in web applications.
- **bcrypt**: a cryptographic hashing algorithm designed to securely hash passwords by incorporating a salt and a computational cost factor to defend against brute force and rainbow table attacks.
- **cloudinary**: a cloud-based platform that provides tools for managing, optimizing, and delivering images and videos in web and mobile applications.
- **cors**: a security mechanism that allows or restricts web applications running on one domain to access resources from another domain through HTTP headers.
- dotenv: Environment variable management.
- **jsonwebtoken**: a compact, self-contained way to securely transmit information between parties as a JSON object, often used for authentication and information exchange.
- **nodemon**: a tool that automatically restarts a Node.js application whenever file changes are detected during development.
- **validator**: a function or mechanism that checks whether input data meets specific rules or constraints.

### Admin

- **axios**: a popular JS library for making HTTP requests from the browser or Node.js, offering a simple API with support for promises, interceptors, and request/response transformation.
- **react-router-dom**: a library for React that enables routing and navigation in web applications, allowing developers to define and manage routes for different components or pages.
- **react-toastify**: a library for displaying customizable toast notifications in React applications.
