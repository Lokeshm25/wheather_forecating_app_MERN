const SearchForm = ({ city, setCity, onSubmit, loading }) => {
  return (
    <form className="search-card" onSubmit={onSubmit}>
      <label htmlFor="city" className="search-label">
        Enter City Name
      </label>
      <div className="search-row">
        <input
          id="city"
          type="text"
          value={city}
          onChange={(event) => setCity(event.target.value)}
          placeholder="e.g. Delhi, Mumbai, Chennai"
          className="search-input"
        />
        <button type="submit" className="search-button" disabled={loading}>
          {loading ? "Searching..." : "Get Forecast"}
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
