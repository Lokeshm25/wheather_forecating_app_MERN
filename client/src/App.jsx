import { useEffect, useState } from "react";
import { fetchHistory, fetchWeather } from "./services/api";
import HistoryList from "./components/HistoryList";
import SearchForm from "./components/SearchForm";
import WeatherDisplay from "./components/WeatherDisplay";

const App = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [historyLoading, setHistoryLoading] = useState(true);
  const [error, setError] = useState("");

  const loadHistory = async () => {
    try {
      setHistoryLoading(true);
      const data = await fetchHistory();
      setHistory(data);
    } catch (historyError) {
      setError(historyError.message);
    } finally {
      setHistoryLoading(false);
    }
  };

  useEffect(() => {
    loadHistory();
  }, []);

  const handleSearch = async (event) => {
    event.preventDefault();

    if (!city.trim()) {
      setError("Please enter a city name.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      const data = await fetchWeather(city.trim());
      setWeatherData(data);
      await loadHistory();
    } catch (searchError) {
      setWeatherData(null);
      setError(searchError.message);
    } finally {
      setLoading(false);
    }
  };

  const handleHistoryClick = async (selectedCity) => {
    setCity(selectedCity);

    try {
      setLoading(true);
      setError("");
      const data = await fetchWeather(selectedCity);
      setWeatherData(data);
      await loadHistory();
    } catch (searchError) {
      setWeatherData(null);
      setError(searchError.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-shell">
      <main className="container">
        <section className="hero">
          <p className="eyebrow">MERN Lab Experiment</p>
          <h1>Weather Forecasting App</h1>
          <p className="hero-copy">
            Search for a city to view live weather details, a short forecast,
            and saved search history powered by MongoDB.
          </p>
        </section>

        <SearchForm
          city={city}
          setCity={setCity}
          onSubmit={handleSearch}
          loading={loading}
        />

        {error ? <p className="message error">{error}</p> : null}
        {loading ? <p className="message">Loading weather data...</p> : null}

        <WeatherDisplay weatherData={weatherData} />

        <HistoryList
          history={history}
          loading={historyLoading}
          onSelectCity={handleHistoryClick}
        />
      </main>
    </div>
  );
};

export default App;
