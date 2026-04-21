const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) {
    return (
      <section className="panel empty-state">
        <h2>Weather Details</h2>
        <p>Search for a city to view current weather and the upcoming forecast.</p>
      </section>
    );
  }

  const { location, current, forecast } = weatherData;

  return (
    <section className="weather-grid">
      <article className="panel current-card">
        <div className="panel-header">
          <div>
            <h2>
              {location.city}, {location.country}
            </h2>
            <p className="subtitle">{current.description}</p>
          </div>
          <img src={current.icon} alt={current.condition} className="weather-icon" />
        </div>

        <div className="temperature">{current.temperature}&deg;C</div>

        <div className="metric-grid">
          <div className="metric-card">
            <span>Feels Like</span>
            <strong>{current.feelsLike}&deg;C</strong>
          </div>
          <div className="metric-card">
            <span>Humidity</span>
            <strong>{current.humidity}%</strong>
          </div>
          <div className="metric-card">
            <span>Wind Speed</span>
            <strong>{current.windSpeed} m/s</strong>
          </div>
          <div className="metric-card">
            <span>Condition</span>
            <strong>{current.condition}</strong>
          </div>
        </div>
      </article>

      <article className="panel forecast-card">
        <h2>Short Forecast</h2>
        <div className="forecast-list">
          {forecast.map((day) => (
            <div key={day.date} className="forecast-item">
              <p>{day.date}</p>
              <img src={day.icon} alt={day.condition} className="forecast-icon" />
              <strong>{day.temperature}&deg;C</strong>
              <span>{day.condition}</span>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default WeatherDisplay;
