import React, { useEffect, useState } from "react";
import darkLogo from "../../assets/dark-logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "./../../context/AuthContext";
function Navbar() {
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const navigate = useNavigate();
  const { logout } = useAuth();
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/", { replace: true });
    } catch (error) {
      console.log("logout error", error);
    }
  };

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setCurrentDate(now.toDateString());
      setCurrentTime(now.toLocaleTimeString());
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <nav className="h-14 bg-white py-2 md:border-none border-b border-b-black/25 px-4 flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center gap-2">
        <img src={darkLogo} alt="Logo" className="w-10" />
        <div className="flex flex-col items justify-center">
          <p className="font-semibold">BookWorm</p>
          <p className="font-semibold text-sm">Library</p>
        </div>
      </div>
      <div className="md:flex hidden justify-center items-start flex-col text-right cursor-default">
        <p className="text-sm font-semibold">{currentTime}</p>
        <p className="text-sm font-semibold">{currentDate}</p>
      </div>
      <div className="block md:hidden">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn rounded-md m-1">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="h-6 w-6"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path>
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-white rounded-box z-[999] w-52 p-2 shadow-2xl rounded-md border border-gray-300"
          >
            <li>
              <NavLink
                to="/home"
                replace
                className={({ isActive }) =>
                  ` flex items-center justify-between gap-3 rounded-md cursor-pointer ${
                    isActive ? "bg-black text-white" : ""
                  }`
                }
              >
                <>
                  <p className="text-lg capitalize font-semibold w-full">
                    Home
                  </p>
                </>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/books"
                replace
                className={({ isActive }) =>
                  ` flex items-center justify-between gap-3 rounded-md cursor-pointer ${
                    isActive ? "bg-black text-white" : ""
                  }`
                }
              >
                <>
                  <p className="text-lg capitalize font-semibold w-full">
                    Books
                  </p>
                </>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/borrowedbooks"
                replace
                className={({ isActive }) =>
                  ` flex items-center justify-between gap-3 rounded-md cursor-pointer ${
                    isActive ? "bg-black text-white" : ""
                  }`
                }
              >
                <>
                  <p className="text-lg capitalize font-semibold w-full">
                    Borrowed Books
                  </p>
                </>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/returnedbooks"
                replace
                className={({ isActive }) =>
                  ` flex items-center justify-between gap-3 rounded-md cursor-pointer ${
                    isActive ? "bg-black text-white" : ""
                  }`
                }
              >
                <>
                  <p className="text-lg capitalize font-semibold w-full">
                    Returned Books
                  </p>
                </>
              </NavLink>
            </li>
            <li
              onClick={handleLogout}
              className=" flex items-center justify-between gap-3 rounded-md cursor-pointer"
            >
              <p className="text-lg capitalize font-semibold w-full">Logout</p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
