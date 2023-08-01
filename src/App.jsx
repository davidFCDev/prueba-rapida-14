import "./App.css";
import { Movies } from "./components/Movies";
import { useSearch } from "./hooks/useSearch";

function App() {
  const { search, updateSearch } = useSearch();
  

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
            onChange={handleChange}
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
