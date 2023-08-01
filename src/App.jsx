import { useState } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import responseMovies from "./mocks/with-results.json";

function App() {
  const [search, updateSearch] = useState("");
  const movies = responseMovies.Search;

  const mappedMovies = movies.map((movie) => {
    return {
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    };
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  const handleChange = (event) => {
    const newSearch = event.target.value;
    updateSearch(newSearch);
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador películas</h1>
        <form onSubmit={handleSubmit}>
          <input
            name="query"
            value={search}
            type="text"
            placeholder="Search a movie..."
          />
          <button>Search</button>
        </form>
      </header>

      <main>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  );
}

export default App;
