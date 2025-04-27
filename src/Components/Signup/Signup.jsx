import React, { useState } from "react";
import lightLogo from "../../assets/light-logo.png";
import darkLogo from "../../assets/dark-logo.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Tag from "../Tag/Tag";
function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const MySwal = withReactContent(Swal);
  const { signUp } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);

      setEmail("");
      setPassword("");
      setName("");

      await MySwal.fire({
        title: "Account Created!",
        text: "Welcome aboard, BookWorm! 📚",
        icon: "success",
        confirmButtonText: "Let's Go!",
        confirmButtonColor: "#000",
      });

      navigate("/home", { replace: true });
    } catch (error) {
      console.error(error);

      MySwal.fire({
        title: "Signup Failed!",
        text: "Something went wrong. Please try again.",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#d33",
      });
    }
  };

  return (
    <div className="h-full flex  md:justify-normal justify-center relative overflow-hidden">
      <div
        className="md:w-1/2 hidden h-screen bg-black text-white md:flex flex-col items-center justify-center rounded-tr-4xl rounded-br-4xl gap-10"
        data-aos="fade-right"
        data-aos-easing="linear"
      >
        <div>
          <img src={lightLogo} alt="" className="w-24" />
        </div>
        <p className="text-5xl text-center">
          BookWorm
          <br />
          <span className="text-3xl text-center uppercase">Library</span>
        </p>
        <div className="flex flex-col gap-8 p-4 max-w-2/3">
          <p className="text-2xl text-wrap text-center ">
            "Your premier digital library for borrowing and reading books"
          </p>
        </div>
      </div>
      <div className="md:w-1/2 sm:w-[80vw] h-full overflow-hidden bg-white flex flex-col items-center justify-center gap-8 py-2 px-1  ">
        <div>
          <img src={darkLogo} alt="" className="w-24" />
        </div>
        <div
          onClick={() => navigate("/", { replace: true })}
          className="absolute right-[-8px] top-10 px-8 py-2 font-bold cursor-pointer border-2 border-r-0 rounded-l-full hover:right-0 transition-all"
        >
          BACK
        </div>
        <p className="md:block hidden text-4xl uppercase">Create Account</p>
        <p className="text-4xl md:hidden text-center">
          BookWorm
          <br />
          <span className="text-xl text-center uppercase">Library</span>
        </p>
        <p>Please enter your credentials to sign up</p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full md:w-[80%] lg:w-[50%] gap-5 p-1"
        >
          <input
            type="text"
            placeholder="Name"
            className="bg-transparent border-2 rounded-xl px-4 py-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-transparent border-2 rounded-xl px-4 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-transparent border-2 rounded-xl px-4 py-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="bg-black text-white rounded-xl py-3 px-1 font-bold cursor-pointer">
            SIGN UP
          </button>
        </form>
      </div>
      <Tag />
    </div>
  );
}

export default Signup;
