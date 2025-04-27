import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import borrowedBook from "../../assets/borrowed-book.png";
import browse from "../../assets/browse.png";
import darkLogo from "../../assets/dark-logo.png";
import returnBook from "../../assets/return.png";
import { useNavigate } from "react-router-dom";
import Navbar from "./../Navbar/Navbar";
import { useLibrary } from "../../context/LibraryContext";
import Tag from "../Tag/Tag";
function Home() {
  const navigate = useNavigate();
  const { borrowedBookPercentage = 0, returnBookPercentage = 0 } = useLibrary();

  return (
    <div className="min-h-full flex overflow-x-hidden">
      <div className="md:block hidden">
        <Sidebar />
      </div>
      <div className="w-full bg-[#f2f2f2] md:ml-20">
        <Navbar />
        <div className="flex lg:flex-row flex-col items-stretch xl:gap-6  lg:gap-3 gap-6">
          <div className="xl:max-w-[65%] lg:max-w-[75%] max-w-full w-full flex flex-col justify-between gap-20 p-2 m-1">
            <div className="grid md:grid-cols-2 grid-cols-1 max-w-full gap-4">
              <div
                onClick={() => navigate("/borrowedbooks", { replace: true })}
                className="bg-white rounded-md flex items-stretch gap-4 lg:px-6 md:px-4 px-3 md:py-7 py-4 cursor-pointer"
              >
                <div className="border-2 border-black"></div>
                <div className="bg-[#d5d5d5] rounded-md md:p-5 p-3 flex items-center justify-center">
                  <img
                    src={borrowedBook}
                    alt="borrowed book"
                    className="w-14"
                  />
                </div>
                <p className="font-bold lg:text-2xl text-xl self-center">
                  Your Borrowed Book List
                </p>
              </div>
              <div
                onClick={() => navigate("/returnedbooks", { replace: true })}
                className="bg-white rounded-md flex items-stretch gap-4 lg:px-6 md:px-4 px-3 md:py-7 py-4 cursor-pointer"
              >
                <div className="border-2 border-black"></div>
                <div className="bg-[#d5d5d5] rounded-md md:p-5 p-3 flex items-center justify-center">
                  <img src={returnBook} alt="borrowed book" className="w-14" />
                </div>
                <p className="font-bold lg:text-2xl text-xl self-center">
                  Your Returned Book List
                </p>
              </div>
              <div
                onClick={() => navigate("/books", { replace: true })}
                className="bg-white rounded-md flex items-stretch max-h-[133px] gap-4 lg:px-6 md:px-4 px-3 md:py-7 py-4 cursor-pointer "
              >
                <div className="border-2 border-black"></div>
                <div className="bg-[#d5d5d5] rounded-md md:p-5 p-3 flex items-center justify-center">
                  <img src={browse} alt="borrowed book" className="w-14" />
                </div>
                <p className="font-bold lg:text-2xl text-xl self-center capitalize">
                  Browse book inventory
                </p>
              </div>
              <div
                className="flex flex-col items-center pt-8 md:pt-4"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <div>
                  <img src={darkLogo} alt="" className="w-24" />
                </div>
                <p className="xl:text-5xl text-3xl text-center">
                  BookWorm
                  <br />
                  <span className="text-3xl text-center uppercase">
                    Library
                  </span>
                </p>
              </div>
            </div>
            <div className="bg-white rounded-md py-10 md:px-7 px-3 flex flex-col justify-center ">
              <p className="xl:text-3xl md:text-2xl text-xl tracking-tight font-semibold">
                "Embarking on the journey of reading fosters personal growth,
                nurturing a path towards excellence and the refinement of
                character."
              </p>
              <p className="text-end text-slate-500">~ BookWorm Team</p>
            </div>
          </div>
          <div className="flex flex-col justify-between items-stretch p-2 m-1 lg:gap-0 gap-6 ">
            <div
              style={{
                background: `conic-gradient(
                #8b8a91 ${borrowedBookPercentage}%,
                #111827 ${borrowedBookPercentage}% ${
                  borrowedBookPercentage + returnBookPercentage
                }%,
                #d1d5db ${borrowedBookPercentage + returnBookPercentage}% 100%
              )`,
              }}
              className="aspect-square w-[50vw] xl:max-w-[420px] lg:max-w-[340px] min-w-[200px] rounded-full self-center transition-all duration-700 ease-in-out"
            ></div>
            <div className="bg-white md:p-7 py-5 px-3 flex gap-4 rounded-md">
              <div className=" border-black border-r-4 p-2 flex justify-center items-center">
                <img src={darkLogo} alt="" className="w-20 aspect-square" />
              </div>
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="flex items-center md:gap-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#8b8a91]"></div>
                  <p className="text-nowrap md:text-base text-sm">
                    Total Borrowed Books
                  </p>
                </div>
                <div className="flex items-center md:gap-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-black"></div>
                  <p className="text-nowrap md:text-base text-sm">
                    Total Returned Books
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Tag />
    </div>
  );
}

export default Home;
