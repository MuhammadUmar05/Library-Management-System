import React, { useState } from "react";
import lightLogo from "../../assets/light-logo.png";
import darkLogo from "../../assets/dark-logo.png";
import { replace, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Tag from "../Tag/Tag";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const MySwal = withReactContent(Swal);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      setEmail("");
      setPassword("");

      await MySwal.fire({
        title: "Login Successful!",
        text: "Welcome back, BookWorm! 📖",
        icon: "success",
        confirmButtonText: "Let's Read!",
        confirmButtonColor: "#000",
      });

      navigate("/home", { replace: true });
    } catch (error) {
      console.error(error);
      await MySwal.fire({
        title: "Login Failed!",
        text: "Invalid credentials. Please try again.",
        icon: "error",
        confirmButtonText: "Retry",
        confirmButtonColor: "#d33",
      });
    }
  };

  return (
    <div className="h-screen flex overflow-hidden md:justify-normal justify-center">
      <div className="md:w-1/2 sm:w-[80vw] h-full bg-white flex flex-col items-center justify-center gap-8 py-2 px-1">
        <div>
          <img src={darkLogo} alt="" className="w-24" />
        </div>
        <p className="md:block hidden text-4xl uppercase">Welcome Back</p>
        <p className="text-4xl md:hidden text-center">
          BookWorm
          <br />
          <span className="text-xl text-center uppercase">Library</span>
        </p>
        <p className="text-center">Please enter your credentials to log in</p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full md:w-[80%] lg:w-[50%] gap-5 p-1"
        >
          <input
            type="email"
            placeholder="Email"
            className="bg-transparent border-2 rounded-xl px-4 py-2"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-transparent border-2 rounded-xl px-4 py-2"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-black text-white rounded-xl py-3 px-1 font-bold cursor-pointer">
            SIGN IN
          </button>
          <p className="cursor-default md:hidden text-center text-lg">
            New to our platform?{" "}
            <span
              onClick={() => navigate("/signup", { replace: true })}
              className="hover:underline cursor-pointer"
            >
              Sign Up now.
            </span>
          </p>
        </form>
      </div>
      <div
        className="md:w-1/2 hidden h-screen bg-black text-white md:flex flex-col items-center justify-center rounded-tl-4xl rounded-bl-4xl gap-10"
        data-aos="fade-left"
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
        <div className="flex flex-col gap-8 py-4">
          <p className="text-lg">New to our platform? Sign Up now.</p>
          <button
            onClick={() => navigate("/signup", { replace: true })}
            className="text-white border-white border-2 rounded-2xl py-3 px-1 font-semibold cursor-pointer hover:bg-white hover:border-black hover:text-black transition ease-linear"
          >
            SIGN UP
          </button>
        </div>
      </div>
      <Tag />
    </div>
  );
}

export default Login;
