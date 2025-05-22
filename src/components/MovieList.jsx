import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div className="space-y-8">
      <div className="relative">
        <h3 className="text-xl font-semibold text-white mb-4">All Movies</h3>
        <div className="flex overflow-x-auto pb-4 gap-4 scrollbar-hide">
          {movies.map((movie, index) => (
            <div key={index} className="flex-none w-48">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>

      {movies.length > 0 && (
        <div className="relative">
          <h3 className="text-xl font-semibold text-white mb-4">Top Rated</h3>
          <div className="flex overflow-x-auto pb-4 gap-4 scrollbar-hide">
            {[...movies]
              .sort((a, b) => b.rating - a.rating)
              .slice(0, 5)
              .map((movie, index) => (
                <div key={index} className="flex-none w-48">
                  <MovieCard movie={movie} />
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieList;
