import React, { useState } from "react";
import { useLibrary } from "../../context/LibraryContext";

function SearchBox() {
  const [searchTitle, setSearchTitle] = useState("");
  const [searchAuthor, setSearchAuthor] = useState("");
  const { search, reset } = useLibrary();

  const handleSearch = (e) => {
    e.preventDefault();
    search(searchTitle, searchAuthor);
    setSearchTitle("");
    setSearchAuthor("");
  };

  const handleReset = (e) => {
    e.preventDefault();
    reset();
    setSearchTitle("");
    setSearchAuthor("");
  };

  return (
    <div className="w-full p-4 border-2 rounded-md flex items-stretch flex-col gap-4">
      <p className="font-semibold">Filter the books by:</p>
      <form className="flex flex-col gap-2 justify-between ">
        <div className="flex md:flex-row flex-col gap-4 justify-between">
          <div className="md:flex-1/2 flex flex-col gap-2">
            <p className="font-medium">Search Book</p>
            <input
              className="bg-transparent border-2 rounded-xl px-4 py-2 "
              type="text"
              placeholder="Title of the book"
              value={searchTitle}
              onChange={(e) => setSearchTitle(e.target.value)}
            />
          </div>
          <div className="md:flex-1/2 flex flex-col gap-2">
            <p className="font-medium">Search Author</p>
            <input
              className="bg-transparent border-2 rounded-xl px-4 py-2"
              type="text"
              placeholder="Author of the book"
              value={searchAuthor}
              onChange={(e) => setSearchAuthor(e.target.value)}
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-between gap-4">
          <button
            onClick={handleSearch}
            className="md:flex-1/2 text-center rounded-md transition-colors bg-black border-2 hover:bg-white hover:text-black text-white font-medium cursor-pointer p-2"
          >
            Search
          </button>
          <button
            onClick={handleReset}
            className="md:flex-1/2 rounded-md transition-colors border-2 hover:bg-black hover:text-white font-medium cursor-pointer p-2"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBox;
