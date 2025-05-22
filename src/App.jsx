import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";
import MovieDetails from "./components/MovieDetails";
import movieData from "./data.json";

const App = () => {
  const [movies, setMovies] = useState(movieData.movies);

  const [filterTitle, setFilterTitle] = useState("");
  const [filterRate, setFilterRate] = useState(0);

  const addMovie = (movie) => {
    setMovies([...movies, { ...movie, id: Date.now() }]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= filterRate
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <Routes>
        <Route
          path="/"
          element={
            <div className="container mx-auto px-4 pt-24 pb-8">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 mb-8 border border-gray-800">
                <Filter
                  filterTitle={filterTitle}
                  setFilterTitle={setFilterTitle}
                  filterRate={filterRate}
                  setFilterRate={setFilterRate}
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-1">
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800 sticky top-24">
                    <h2 className="text-2xl font-bold text-white mb-6">
                      Add New Movie
                    </h2>
                    <AddMovie addMovie={addMovie} />
                  </div>
                </div>

                <div className="lg:col-span-3">
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800">
                    <MovieList movies={filteredMovies} />
                  </div>
                </div>
              </div>
            </div>
          }
        />
        <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
      </Routes>
    </div>
  );
};

export default App;
