import { SearchHistory } from "../models/SearchHistory.js";
import { fetchWeatherByCity } from "../services/weatherService.js";

export const getWeatherByCity = async (req, res, next) => {
  try {
    const rawCity = req.params.city || "";
    const city = rawCity.trim();

    if (!city) {
      return res.status(400).json({ message: "City name is required." });
    }

    const result = await fetchWeatherByCity(city);

    if (result.status !== 200) {
      return res.status(result.status).json({ message: result.message });
    }

    const { location, current } = result.data;

    await SearchHistory.create({
      city: location.city,
      country: location.country,
      temperature: current.temperature,
      condition: current.condition
    });

    return res.json(result.data);
  } catch (error) {
    return next(error);
  }
};
