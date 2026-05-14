function SearchBar({ city, setCity, fetchWeather }) {

  return (
    <div className="search-box">

      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={fetchWeather}>
        Search
      </button>

    </div>
  );
}

export default SearchBar;