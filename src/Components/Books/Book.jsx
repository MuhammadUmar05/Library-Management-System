import React from "react";
import { useLibrary } from "../../context/LibraryContext";
import { toast } from "react-toastify";

function Book({ id, img, author, title, status, desc, genre }) {
  const modalId = `modal_${id}`;
  const { borrow, borrowBooks } = useLibrary();

  const openModal = () => {
    document.getElementById(modalId)?.showModal();
  };

  const addToBorrow = (id) => {
    const result = borrow(id);
    if (result) {
      toast.success("📚 Book borrowed successfully!");
      document.getElementById(modalId)?.close();
    } else {
      toast.error("⚠️ Failed to borrow the book!");
    }
  };

  // Check if this book is already borrowed
  const isBorrowed = borrowBooks.some((book) => book.id === id);

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
        className={`py-2 px-3 rounded-md border-2 cursor-pointer transition-colors font-medium 
        ${
          status === "issued"
            ? "bg-gray-400 text-white cursor-not-allowed"
            : "hover:bg-black hover:text-white"
        }`}
        onClick={openModal}
        disabled={status === "issued"}
      >
        {status === "issued" ? "Already Borrowed" : "Avail the Book"}
      </button>

      <dialog id={modalId} className="modal p-8">
        <div className="modal-box bg-white z-[999] rounded-md flex md:flex-row flex-col gap-4 justify-between items-center">
          <img src={img} alt="" className="rounded-md aspect-square w-48" />
          <div className="flex flex-col justify-between gap-4 h-full">
            <p className="text-xl font-bold">{title}</p>
            <p className="font-medium">{desc}</p>
            <p className="font-medium">Genre: {genre}</p>

            <button
              onClick={() => {
                addToBorrow(id);
              }}
              className={`py-2 px-3 rounded-md border-2 cursor-pointer transition-colors font-medium
              ${
                status === "issued"
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "hover:bg-black hover:text-white"
              }`}
              disabled={status === "issued"}
            >
              {status === "issued" ? "Already Borrowed" : "Borrow Book"}
            </button>
          </div>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}

export default Book;
