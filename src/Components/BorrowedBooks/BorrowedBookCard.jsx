import React from "react";
import { useLibrary } from "../../context/LibraryContext";
import { toast } from "react-toastify";

function BorrowedBookCard({ id, img, status, title, author }) {
  const { returnB, returnBooks } = useLibrary();
  const addToReturn = (id) => {
    returnB(id);
    toast.success("✅ Book returned successfully!");
  };

  return (
    <div
      data-aos="fade-up"
      key={id}
      className="bg-white/50 p-4 rounded-md flex flex-col justify-between gap-2 border-2"
    >
      <img src={img} alt="" className="rounded-md aspect-square" />
      <p
        className={`bg-slate-300 px-3 py-1 rounded-md w-fit uppercase font-bold ${
          status === "available" ? "text-green-700" : "text-red-700"
        }`}
      >
        {status}
      </p>
      <p className="text-xl text-[#653d4b] font-bold">{title}</p>
      <p className="text-sm font-semibold">{author}</p>
      <button
        onClick={() => addToReturn(id)}
        className="py-2 px-3 rounded-md border-2 cursor-pointer hover:bg-black hover:text-white transition-colors font-medium"
      >
        Return the Book
      </button>
    </div>
  );
}

export default BorrowedBookCard;
