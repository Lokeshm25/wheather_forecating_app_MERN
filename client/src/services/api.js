const API_BASE_URL = "http://localhost:5000/api";

const parseResponse = async (response) => {
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong.");
  }

  return data;
};

export const fetchWeather = async (city) => {
  const response = await fetch(`${API_BASE_URL}/weather/${encodeURIComponent(city)}`);
  return parseResponse(response);
};

export const fetchHistory = async () => {
  const response = await fetch(`${API_BASE_URL}/history`);
  return parseResponse(response);
};
