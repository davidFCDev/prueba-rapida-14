import "./App.css";
import { Movies } from "./components/Movies";
import { useSearch } from "./hooks/useSearch";
import { useMovies } from "./hooks/useMovies";

function App() {
  const { search, updateSearch, error } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search });

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies({ search });
  };

  const handleChange = (event) => {
    const newSearch = event.target.value;
    updateSearch(newSearch);
  };

  return (
		<div className='page'>
			<header>
				<h1>Buscador de películas</h1>
				<form className='form' onSubmit={handleSubmit}>
					<input
						name='query'
						onChange={handleChange}
						value={search}
						placeholder='Avengers, matrix...'
					/>
					<button>Buscar</button>
				</form>
				{error && <p style={{ color: 'red' }}>{error}</p>}
			</header>

			<main>{loading ? <p>Loading...</p> : <Movies movies={movies} />}</main>
		</div>
	);
}

export default App;
