# Exam Average Calculator Frontend

[![React.js](https://img.shields.io/badge/React.js-000000?style=for-the-badge&logo=React&logoColor=#61DAFB)](https://reactnative.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Motion](https://img.shields.io/badge/Motion-3178C6?style=for-the-badge&logo=framer&logoColor=white)](https://motion.dev/)

This is the frontend for a web application that calculates the weighted average (Moyenne Générale Pondérée - MGP) for University of Yaounde I students.

This project was created with [Vite](https://vitejs.dev/) and [React](https://reactjs.org/).

## Available Scripts

In the project directory, you can run:

```bash
pnpm install
```

Installs all the project dependencies.

```bash
pnpm run dev
```

Runs the app in development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## API Integration

The frontend communicates with the following API endpoints:

- `POST /calculate`: Calculate exam average
- `GET /results`: Get all calculation results
- `GET /results/{id}`: Get a specific result by ID

## Project Structure

## Project Structure

```
.
├── public/               # Static files (favicon, images, etc.)
├── src/
│   ├── components/       # Reusable UI components
│   ├── hooks/            # Custom React hooks
│   ├── pages/            # Page components (routes)
│   ├── services/         # API service functions
│   ├── styles/           # CSS/SCSS files or style modules
│   ├── utils/            # Utility/helper functions
│   ├── App.jsx           # Main application component
│   └── main.jsx          # Application entry point
├── .env                  # Environment variables (not committed)
├── .gitignore
├── index.html
├── package.json
├── pnpm-lock.yaml
├── README.md             # This file
└── vite.config.js        # Vite configuration
```

## Setup

1. Clone the repository
2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Create a `.env` file in the root directory and add your environment variables
4. Start the development server:

   ```bash
   pnpm run dev
   ```

## About

This project was developed by [NDANG ESSI Pierre Junior](https://github.com/EssiJunior)
