import { createContext, useContext, useState, useRef, useEffect } from "react";
import { BookList } from "../Data/Linked-List";
import books from "../books";

const LibraryContext = createContext(null);
export const useLibrary = () => useContext(LibraryContext);

export const LibraryProvider = ({ children }) => {
  const libRef = useRef(new BookList());

  if (libRef.current.head === null) {
    for (let i = 0; i < 19; i++) {
      libRef.current.push(
        books[i].title,
        books[i].author,
        books[i].description,
        books[i].status,
        books[i].image,
        books[i].genre
      );
    }
  }

  const [library, setLibrary] = useState(() => libRef.current.traverse());

  const [borrowBooks, setBorrowBooks] = useState(() => {
    const saved = localStorage.getItem("borrowBooks");
    return saved ? JSON.parse(saved) : [];
  });

  const [returnBooks, setReturnBooks] = useState(() => {
    const saved = localStorage.getItem("returnBooks");
    return saved ? JSON.parse(saved) : [];
  });

  const [borrowedBookPercentage, setBorrwedBookPercentage] = useState(0);
  const [returnBookPercentage, setreturnBookPercentage] = useState(0);

  useEffect(() => {
    setBorrwedBookPercentage((borrowBooks.length / library.length) * 100);
    setreturnBookPercentage((returnBooks.length / library.length) * 100);
  }, [borrowBooks, returnBooks, library]);

  useEffect(() => {
    localStorage.setItem("borrowBooks", JSON.stringify(borrowBooks));
  }, [borrowBooks]);

  useEffect(() => {
    localStorage.setItem("returnBooks", JSON.stringify(returnBooks));
  }, [returnBooks]);

  const addBook = (title, author, desc, status, image, genre) => {
    libRef.current.push(title, author, desc, status, image, genre);
    setLibrary(libRef.current.traverse());
  };

  const removeBook = () => {
    libRef.current.pop();
    setLibrary(libRef.current.traverse());
  };

  const [filteredLibrary, setFilteredLibrary] = useState(library);

  useEffect(() => {
    setFilteredLibrary(library);
  }, [library]);

  const search = (title, author) => {
    let filtered = library;
    if (title) {
      filtered = filtered.filter((book) =>
        book.title.toLowerCase().includes(title.toLowerCase())
      );
    }
    if (author) {
      filtered = filtered.filter((book) =>
        book.author.toLowerCase().includes(author.toLowerCase())
      );
    }
    setFilteredLibrary(filtered);
  };

  const reset = () => {
    setFilteredLibrary(library);
  };

  const borrow = (id) => {
    const borrowed = libRef.current.issueBook(id);
    setLibrary(libRef.current.traverse());
    setBorrowBooks((prev) => [...prev, ...borrowed]);
    return borrowed;
  };

  const returnB = (id) => {
    const returned = libRef.current.returnBook(id);
    setLibrary(libRef.current.traverse());
    setReturnBooks((prev) => [...prev, ...returned]);
    setBorrowBooks((prev) => prev.filter((book) => book.id !== id));
  };

  const clearReturns = () => {
    localStorage.setItem("returnBooks", "[]");
    setReturnBooks([]);
  };

  return (
    <LibraryContext.Provider
      value={{
        library,
        filteredLibrary,
        addBook,
        removeBook,
        borrow,
        borrowBooks,
        returnB,
        returnBooks,
        borrowedBookPercentage,
        returnBookPercentage,
        search,
        reset,
        clearReturns,
      }}
    >
      {children}
    </LibraryContext.Provider>
  );
};
