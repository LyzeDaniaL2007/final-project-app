import React, { useState } from 'react';
import { Search } from 'lucide-react'; // Lucide icon
import { Link } from 'react-router-dom'; // Import Link for routing
import './Search.scss'; // Import your SCSS

const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      const responseMovies = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=00cb3a170a054e278fecc6aecd6c6885&query=${query}`
      );
      const dataMovies = await responseMovies.json();

      setResults(dataMovies.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="search-container p-6 bg-white dark:bg-black dark:text-white">
      <form className="search-form" onSubmit={handleSearch}>
        <input
        className="text-black"
          type="text"
          placeholder="Search for movies or TV shows..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">
          <Search size={24} />
        </button>
      </form>

      {/* Loading animation */}
      {loading && <div className="loading">Loading...</div>}

      <div className="results-container">
        {results.map((result) => (
          <Link to={`/detail/${result.id}`} key={result.id}> {/* Link to detail page */}
            <div className="result-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
                alt={result.title || result.name}
              />
              <div className="result-info">
                <h3>{result.title || result.name}</h3>
                <p>{new Date(result.release_date || result.first_air_date).toLocaleDateString()}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchComponent;
