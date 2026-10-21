const FilterSection = () => {
  return (
    <div className="container mx-auto mt-0 pt-0">
      <h1 className="text-2xl">Find Your Next Developer Role</h1>
      <p>Search, filter and save the jobs you like...</p>

      <div className="flex justify-between items-center">
        {/* search */}
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>

        {/* tab-section */}
        <div>
            <button className="btn btn-neutral rounded-full mr-2">All</button>
            <button className="btn  rounded-full mr-2">Fontend</button>
            <button className="btn  rounded-full mr-2">Backend</button>
            <button className="btn  rounded-full mr-2">Design</button>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
