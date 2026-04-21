const HistoryList = ({ history, loading, onSelectCity }) => {
  return (
    <section className="panel history-card">
      <div className="panel-header history-header">
        <h2>Recent Search History</h2>
      </div>

      {loading ? <p>Loading search history...</p> : null}

      {!loading && history.length === 0 ? (
        <p>No searches yet. Your successful searches will appear here.</p>
      ) : null}

      <div className="history-list">
        {history.map((item) => (
          <button
            key={item._id}
            type="button"
            className="history-item"
            onClick={() => onSelectCity(item.city)}
          >
            <div>
              <strong>
                {item.city}, {item.country}
              </strong>
              <p>{new Date(item.searchedAt).toLocaleString("en-IN")}</p>
            </div>
            <div className="history-meta">
              <span>{item.temperature}&deg;C</span>
              <span>{item.condition}</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default HistoryList;
