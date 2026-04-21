import { env } from "../config/env.js";

const BASE_URL = "https://api.openweathermap.org/data/2.5";
const ICON_BASE_URL = "https://openweathermap.org/img/wn";

const buildApiUrl = (path, city) => {
  const url = new URL(`${BASE_URL}/${path}`);
  url.searchParams.set("q", city);
  url.searchParams.set("appid", env.openWeatherApiKey);
  url.searchParams.set("units", "metric");
  return url;
};

const mapForecastList = (forecastItems) => {
  const uniqueDays = new Map();

  for (const item of forecastItems) {
    const date = item.dt_txt.slice(0, 10);

    if (!uniqueDays.has(date) && uniqueDays.size < 5) {
      uniqueDays.set(date, {
        date,
        temperature: Math.round(item.main.temp),
        condition: item.weather[0].main,
        icon: `${ICON_BASE_URL}/${item.weather[0].icon}@2x.png`
      });
    }
  }

  return Array.from(uniqueDays.values());
};

export const fetchWeatherByCity = async (city) => {
  if (!env.openWeatherApiKey) {
    return {
      status: 500,
      message: "OPENWEATHER_API_KEY is missing. Add it to your .env file."
    };
  }

  const [currentResponse, forecastResponse] = await Promise.all([
    fetch(buildApiUrl("weather", city)),
    fetch(buildApiUrl("forecast", city))
  ]);

  const currentData = await currentResponse.json();
  const forecastData = await forecastResponse.json();

  if (!currentResponse.ok) {
    return {
      status: currentResponse.status,
      message: currentData.message || "Unable to fetch weather data."
    };
  }

  if (!forecastResponse.ok) {
    return {
      status: forecastResponse.status,
      message: forecastData.message || "Unable to fetch forecast data."
    };
  }

  return {
    status: 200,
    data: {
      location: {
        city: currentData.name,
        country: currentData.sys.country
      },
      current: {
        temperature: Math.round(currentData.main.temp),
        feelsLike: Math.round(currentData.main.feels_like),
        humidity: currentData.main.humidity,
        windSpeed: currentData.wind.speed,
        condition: currentData.weather[0].main,
        description: currentData.weather[0].description,
        icon: `${ICON_BASE_URL}/${currentData.weather[0].icon}@2x.png`
      },
      forecast: mapForecastList(forecastData.list)
    }
  };
};
