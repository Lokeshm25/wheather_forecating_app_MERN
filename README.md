# Weather Forecasting App MERN

Weather Forecasting App is a submission-ready MERN project built for a lab experiment. It uses a React frontend, Express backend, MongoDB database, and OpenWeatherMap REST API integration to display current weather, short forecast details, and saved search history.

## Objective

To build a working MERN application that fetches weather information for a user-entered city, displays forecast data in a clean interface, and stores recent search history in MongoDB for analysis and evaluation.

## Technology Stack

- HTML
- CSS
- JavaScript
- ReactJS
- Node.js
- Express.js
- MongoDB with Mongoose
- OpenWeatherMap REST API

## Project Structure

```text
.
|-- client/
|-- server/
|-- .env.example
|-- package.json
```

## Features

- Search weather by city name
- Display current weather conditions
- Display a short multi-day forecast
- Save successful searches to MongoDB
- Show recent search history
- Handle loading, empty, and error states
- Responsive UI for desktop and mobile

## Environment Variables

Create a `.env` file in the project root and use the following variables:

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/weather_forecasting_app
OPENWEATHER_API_KEY=your_openweather_api_key_here
CLIENT_URL=http://localhost:5173
```

## Setup Steps

1. Install Node.js and MongoDB.
2. Copy `.env.example` to `.env` and add your OpenWeatherMap API key.
3. Install dependencies:

```bash
npm.cmd run install:all
```

4. Start the backend:

```bash
npm.cmd run server
```

5. In another terminal, start the frontend:

```bash
npm.cmd run client
```

6. Open `http://localhost:5173` in the browser.

## API Endpoints

- `GET /api/weather/:city` returns normalized current weather and forecast data
- `GET /api/history` returns recent MongoDB search history
- `GET /api/health` returns backend health status

## Procedure

1. Start MongoDB locally.
2. Start the Express backend server.
3. Start the React frontend.
4. Enter a city name in the search box.
5. Observe current weather and forecast details.
6. Confirm that the search is stored and shown in recent history.

## Expected Output

- The app displays weather details for a valid city.
- Invalid city names show a friendly error message.
- Search history is stored in MongoDB and displayed in the interface.
- The layout works on both desktop and mobile screens.

## Bloom Mapping

- `L3 Apply`: Implement React components, Express routes, MongoDB schema, and REST API integration.
- `L4 Analyze`: Analyze city input, API response shaping, history storage, and error handling behavior.
- `L5 Evaluate`: Evaluate usability, API dependency, data accuracy, and possible improvements.

## Result

The experiment demonstrates a complete MERN-based weather forecasting system that integrates frontend development, backend API handling, external REST services, and database persistence in a single working application.

## Screenshots

- Home page screenshot
- Weather result screenshot
- Search history screenshot

## Future Improvements

- Add geolocation-based weather search
- Add temperature unit toggle
- Add charts for weather trends
- Add user authentication and saved favorites
