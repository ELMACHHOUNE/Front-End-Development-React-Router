const Filter = ({ filterTitle, setFilterTitle, filterRate, setFilterRate }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
      <div className="relative flex-1 max-w-md">
        <input
          type="text"
          placeholder="Search movies..."
          value={filterTitle}
          onChange={(e) => setFilterTitle(e.target.value)}
          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition-all text-white placeholder-gray-400"
        />
        <span className="absolute right-3 top-3.5 text-gray-400">🔍</span>
      </div>

      <div className="relative flex-1 max-w-md">
        <input
          type="number"
          placeholder="Minimum rating"
          value={filterRate}
          onChange={(e) => setFilterRate(e.target.value)}
          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition-all text-white placeholder-gray-400"
          min="0"
          max="10"
        />
        <span className="absolute right-3 top-3.5 text-gray-400">⭐</span>
      </div>
    </div>
  );
};

export default Filter;
