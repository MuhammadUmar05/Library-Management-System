import React, { useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Book from "./Book";
import { useLibrary } from "../../context/LibraryContext";
import SearchBox from "./../SearchBox/SearchBox";
import Tag from "../Tag/Tag";

function Books() {
  const { filteredLibrary } = useLibrary();

  return (
    <div className="flex">
      <div className="md:block hidden">
        <Sidebar />
      </div>
      <div className="w-full bg-[#f2f2f2] md:ml-20">
        <Navbar />
        <div className="px-10  flex flex-col gap-4">
          <h1 className="md:text-4xl text-2xl font-extrabold border-b pt-5 pb-2 md:text-start text-center">
            Books Inventory
          </h1>
          <div>
            <SearchBox />
          </div>
        </div>
        <div className="p-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {filteredLibrary.map((lib) => {
            const { title, author, desc, genre, img, id, status } = lib;
            return (
              <Book
                key={id}
                author={author}
                img={img}
                title={title}
                id={id}
                status={status}
                desc={desc}
                genre={genre}
              />
            );
          })}
        </div>
      </div>
      <Tag />
    </div>
  );
}

export default Books;
