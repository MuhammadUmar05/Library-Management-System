import React, { useEffect } from "react";
import Signup from "./Components/Signup/Signup";
import AOS from "aos";
import "aos/dist/aos.css";
import Login from "./Components/Login/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Books from "./Components/Books/Books";
import BorrowedBooks from "./Components/BorrowedBooks/BorrowedBooks";
import ReturnedBooks from "./Components/ReturnedBooks/ReturnedBooks";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="h-screen">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/borrowedbooks" element={<BorrowedBooks />} />
        <Route path="/returnedbooks" element={<ReturnedBooks />} />
      </Routes>
    </div>
  );
}

export default App;
