import React from "react";
import { useLibrary } from "../../context/LibraryContext";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import ReturnedBookCard from "./ReturnedBookCard";
import { toast } from "react-toastify";
import Tag from "../Tag/Tag";

function ReturnedBooks() {
  const { returnBooks, clearReturns } = useLibrary();
  const clearBooks = () => {
    clearReturns();
    toast.success("Return Books cleared successfully");
  };
  return (
    <div className="flex h-full">
      <div className="md:block hidden">
        <Sidebar />
      </div>
      <div className="w-full bg-[#f2f2f2] md:ml-20">
        <Navbar />
        <div className="px-10 flex justify-between items-center border-b">
          <h1 className="md:text-4xl text-2xl font-extrabold  pt-5 pb-2 md:text-start text-center">
            Returned Books
          </h1>
          <button
            className="cursor-pointer p-2 w-7 h-7 flex items-center justify-center aspect-square rounded-full hover:bg-black/10 transition-colors"
            title="Clear Returned Books"
            onClick={clearBooks}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
        <div className="p-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {returnBooks.map((returnBook) => {
            const { title, author, desc, genre, img, id, status } = returnBook;
            return (
              <ReturnedBookCard
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
        {returnBooks.length === 0 && (
          <div className="flex justify-center items-center">
            <p className="text-3xl font-medium text-center">NOTHING TO SHOW</p>
          </div>
        )}
      </div>
      <Tag />
    </div>
  );
}

export default ReturnedBooks;
