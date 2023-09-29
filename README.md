# Carpool Frontend

This is the frontend application for the Carpool system.  
It is built with **React** and communicates with the backend API.

## Features
- React with React Router for navigation
- Axios for API requests
- Environment variable support for API URL
- Easy deployment to Netlify, Vercel, or Render

## Technologies
- React
- React Router
- Axios

## Installation & Local Setup

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd carpool-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root of the project with your backend API URL:
   ```env
   REACT_APP_API_URL=http://localhost:5000
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open the application in your browser:
   ```
   http://localhost:3000
   ```

## Deployment
- The frontend can be deployed to Render, Netlify, or Vercel.
- Make sure to configure the environment variable `REACT_APP_API_URL` to point to the deployed backend API.
