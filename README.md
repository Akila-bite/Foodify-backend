
# Foodify Backend

## Overview
Foodify Backend is the server-side application for the Foodify web app. It provides an API to fetch recipes, including images, which are consumed by the Foodify frontend. The backend runs on **localhost:5000** and serves as the data source for the application.

## Features
- Provides a RESTful API for fetching recipes and their details.
- Serves images associated with the recipes.
- Enables searching and filtering recipes via API endpoints.
- Handles requests from the Foodify frontend.

## Technologies Used
- **Node.js** – Server runtime.
- **Express.js** – Web framework for building REST APIs.
- **CORS** – Enables cross-origin requests from the frontend.

## Installation & Setup
### 1. Clone the repository:
```sh
git clone https://github.com/Akila-bite/Foodify-backend.git
cd Foodify-backend
```

### 2. Install dependencies:
```sh
npm install
```

### 3. Environment Variables
Create a `.env` file in the project root and add necessary configurations:
```
PORT=5000

```

### 4. Start the server
```sh
npm start
```
## Backend with data:
https://myfoodify-backend.onrender.com/api/recipes 


## API Endpoints
| Method | Endpoint          | Description            |
|--------|------------------|------------------------|
| GET    | /api/recipes     | Get all recipes       |
| GET    | /api/recipes/:id | Get a single recipe   |
| POST   | /api/recipes     | Add a new recipe      |
| PUT    | /api/recipes/:id | Update a recipe       |
| DELETE | /api/recipes/:id | Delete a recipe       |

## Contributing
Feel free to fork the repository and submit pull requests.



