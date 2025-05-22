import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link
      to={`/movie/${movie.id}`}
      className="group relative block overflow-hidden rounded-lg transition-all duration-300 hover:scale-110 hover:z-10"
    >
      <div className="relative aspect-[2/3]">
        <img
          src={movie.posterURL}
          alt={movie.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-bold text-white truncate">
                {movie.title}
              </h2>
              <div className="flex items-center bg-yellow-400 text-gray-900 px-2 py-0.5 rounded-full text-sm font-bold">
                <span>⭐</span>
                <span className="ml-1">{movie.rating}</span>
              </div>
            </div>
            <p className="text-sm text-gray-300 line-clamp-2">
              {movie.description}
            </p>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-red-500 font-medium text-sm">
                Watch Now
              </span>
              <span className="text-white/80 text-sm">→</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
