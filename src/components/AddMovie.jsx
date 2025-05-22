import { useState } from "react";

const AddMovie = ({ addMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
  });

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newMovie.title || !newMovie.rating) return;
    addMovie({ ...newMovie, rating: Number(newMovie.rating) });
    setNewMovie({ title: "", description: "", posterURL: "", rating: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-300 mb-1"
        >
          Movie Title
        </label>
        <input
          id="title"
          name="title"
          value={newMovie.title}
          onChange={handleChange}
          placeholder="Enter movie title"
          className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition-all text-white placeholder-gray-400"
          required
        />
      </div>

      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-300 mb-1"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={newMovie.description}
          onChange={handleChange}
          placeholder="Enter movie description"
          className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition-all text-white placeholder-gray-400 resize-none"
          rows="3"
        />
      </div>

      <div>
        <label
          htmlFor="posterURL"
          className="block text-sm font-medium text-gray-300 mb-1"
        >
          Poster URL
        </label>
        <input
          id="posterURL"
          name="posterURL"
          value={newMovie.posterURL}
          onChange={handleChange}
          placeholder="Enter poster image URL"
          className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition-all text-white placeholder-gray-400"
        />
      </div>

      <div>
        <label
          htmlFor="rating"
          className="block text-sm font-medium text-gray-300 mb-1"
        >
          Rating (0-10)
        </label>
        <input
          id="rating"
          name="rating"
          type="number"
          value={newMovie.rating}
          onChange={handleChange}
          placeholder="Enter rating"
          className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition-all text-white placeholder-gray-400"
          min="0"
          max="10"
          step="0.1"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition-colors duration-300 font-medium"
      >
        Add Movie
      </button>
    </form>
  );
};

export default AddMovie;
