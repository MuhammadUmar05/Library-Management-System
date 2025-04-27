import React, { useState } from "react";
import lightLogo from "../../assets/light-logo.png";
import logoutImg from "../../assets/logout.png";
import lightHome from "../../assets/light-home.png";
import darkHome from "../../assets/dark-home.png";
import lightBook from "../../assets/light-book.png";
import darkBook from "../../assets/dark-book.png";
import darkReturn from "../../assets/return.png";
import lightReturn from "../../assets/return-light.png";
import lightBorrow from "../../assets/light-borrow.png";
import darkBorrow from "../../assets/dark-borrow.png";
import { useNavigate, NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
function Sidebar() {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const { logout } = useAuth();
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/", { replace: true });
    } catch (error) {
      console.log("logout error", error);
    }
  };
  return (
    <div className="bg-black fixed top-0 left-0 z-50 h-screen w-fit text-white flex flex-col justify-between items-center py-6 px-4">
      <div
        onClick={() => setIsExpanded((prev) => !prev)}
        className="cursor-pointer flex flex-col items-center justify-center gap-4"
      >
        <img src={lightLogo} alt="" className="w-12" />
        {isExpanded && (
          <p className="text-lg text-center">
            BookWorm
            <br />
            <span className=" text-center uppercase">Library</span>
          </p>
        )}
      </div>
      <ul className="flex flex-col items-stretch w-full gap-4">
        <li>
          <NavLink
            to="/home"
            replace
            className={({ isActive }) =>
              ` flex items-center justify-between gap-3 p-2 rounded-md cursor-pointer ${
                isActive ? "bg-white text-black" : ""
              }`
            }
          >
            {({ isActive }) => (
              <>
                <img
                  src={isActive ? darkHome : lightHome}
                  alt="Home"
                  className="w-6 h-6"
                />
                {isExpanded && (
                  <p className="text-lg capitalize font-semibold w-full">
                    Home
                  </p>
                )}
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/books"
            replace
            className={({ isActive }) =>
              `flex items-center justify-between gap-3 p-2 rounded-md cursor-pointer ${
                isActive ? "bg-white text-black" : ""
              }`
            }
          >
            {({ isActive }) => (
              <>
                <img
                  src={isActive ? darkBook : lightBook}
                  alt="Books"
                  className="w-6 h-6"
                />
                {isExpanded && (
                  <p className="text-lg capitalize font-semibold w-full">
                    Books
                  </p>
                )}
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/borrowedbooks"
            replace
            className={({ isActive }) =>
              `flex items-center justify-between gap-3 p-2 rounded-md cursor-pointer ${
                isActive ? "bg-white text-black" : ""
              }`
            }
          >
            {({ isActive }) => (
              <>
                <img
                  src={isActive ? darkBorrow: lightBorrow}
                  alt="Rec"
                  className="w-6 h-6"
                />
                {isExpanded && (
                  <p className=" capitalize font-semibold w-full">
                    Borrowed Books
                  </p>
                )}
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/returnedbooks"
            replace
            className={({ isActive }) =>
              `flex items-center justify-between gap-3 p-2 rounded-md cursor-pointer ${
                isActive ? "bg-white text-black" : ""
              }`
            }
          >
            {({ isActive }) => (
              <>
                <img
                  src={isActive ? darkReturn : lightReturn}
                  alt="Rec"
                  className="w-7 h-7"
                />
                {isExpanded && (
                  <p className=" capitalize font-semibold w-full">
                    Returned Books
                  </p>
                )}
              </>
            )}
          </NavLink>
        </li>
      </ul>
      <div>
        <button
          onClick={handleLogout}
          className="transition-all hover:bg-white/30  flex justify-center items-center gap-4 p-2 rounded-md cursor-pointer"
          title="Logout"
        >
          <img src={logoutImg} alt="" className="w-6 h-6" />
          {isExpanded && (
            <p className="text-lg uppercase font-semibold">Logout</p>
          )}
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
