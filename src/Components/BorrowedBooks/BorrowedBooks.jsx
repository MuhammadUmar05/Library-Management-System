import React from "react";
import { useLibrary } from "../../context/LibraryContext";
import BorrowedBookCard from "./BorrowedBookCard";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Tag from "../Tag/Tag";
function BorrowedBooks() {
  const { borrowBooks } = useLibrary();
  return (
    <div className="flex h-full">
      <div className="md:block hidden">
        <Sidebar />
      </div>
      <div className="w-full bg-[#f2f2f2] md:ml-20">
        <Navbar />
        <div className="px-10">
          <h1 className="md:text-4xl text-2xl font-extrabold border-b pt-5 pb-2 md:text-start text-center">
            Borrowed Books
          </h1>
        </div>
        <div className="p-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {borrowBooks.map((borrBook) => {
            const { title, author, desc, genre, img, id, status } = borrBook;
            return (
              <BorrowedBookCard
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
        {borrowBooks.length === 0 && (
          <div className="flex justify-center items-center">
            <p className="text-3xl font-medium text-center">NOTHING TO SHOW</p>
          </div>
        )}
      </div>
      <Tag />
    </div>
  );
}

export default BorrowedBooks;
