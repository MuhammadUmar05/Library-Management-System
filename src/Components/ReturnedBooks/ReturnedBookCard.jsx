import React from "react";

function ReturnedBookCard({ id, img, status, title, author }) {
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
        disabled={true}
        className="py-2 px-3 rounded-md border-2 cursor-not-allowed bg-black text-white font-medium"
      >
        Returned Book
      </button>
    </div>
  );
}

export default ReturnedBookCard;