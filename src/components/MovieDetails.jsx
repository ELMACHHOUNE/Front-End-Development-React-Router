import { useParams, useNavigate } from "react-router-dom";

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie)
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-2">
            Movie Not Found
          </h2>
          <p className="text-gray-400 mb-4">
            The movie you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300"
          >
            Back to Home
          </button>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-black py-8">
      <div className="container mx-auto px-4">
        <button
          onClick={() => navigate("/")}
          className="mb-8 inline-flex items-center px-4 py-2 bg-gray-900/50 backdrop-blur-sm text-white rounded-lg border border-gray-800 hover:bg-gray-800 transition-colors duration-300"
        >
          <span className="mr-2">←</span> Back to Movies
        </button>

        <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img
                src={movie.posterURL}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8 md:w-2/3">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-bold text-white">{movie.title}</h2>
                <div className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full font-bold">
                  ⭐ {movie.rating}
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {movie.description}
              </p>

              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-96 rounded-lg shadow-lg"
                  src={movie.trailer}
                  title={movie.title}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
