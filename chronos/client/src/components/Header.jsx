import React, { useState } from "react";
import {
  RiMenu3Fill,
  RiCloseLine,
  RiCheckboxBlankCircleFill,
} from "react-icons/ri";
import { BsSearchHeart } from "react-icons/bs";
import { MdMapsHomeWork } from "react-icons/md";

//import Auth from "../utils/auth";
export default function Header({ setLoginModal, loginModal }) {
  const [showMenu, setShowMenu] = useState(false);

  //console.log(Auth.loggedIn);
  //   const logoutHandler = (event) => {
  //     event.preventDefault();
  //     console.log("OUTTT");
  //     Auth.logout();
  //   };
  return (
    <header className="flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh]  z-50">
      <div className="xl:w-1/6 text-center -mt-1">
        <span className="text-2xl font-bold relative bg-white">
          Chronos
          <span className="text-secondary text-5xl">.</span>
          <RiCheckboxBlankCircleFill className="absolute -left-3 -bottom-3 text-primary -z-10" />
        </span>
      </div>
      {/* {Auth.loggedIn() ? (
        <nav
          className={`fixed xl:static bg-white w-[80%] md:w-[40%] xl:w-full h-full ${
            showMenu ? 'left-0 ' : '-left-full'
          } top-0  flex flex-1 flex-col xl:flex-row justify-center items-center gap-10 transition-all duration-500 cursor-pointer`}
          style={{ fontFamily: 'Gloock, serif' }}
        >
          <a
            href="#"
            className="hover:bg-slate-200 p-2 rounded-lg transition-all ease-in-out duration-700"
          >
            About Us
          </a>
          <a
            href="#"
            className="hover:bg-slate-200 p-2 rounded-lg transition-all ease-in-out duration-700"
          >
            Contact
          </a>
          <button
            onClick={logoutHandler}
            to="/"
            className="hover:bg-slate-200 p-2 rounded-lg transition-all ease-in-out duration-700"
          >
            Log Out
          </button>
        </nav>
      ) : ( */}
      <nav
        className={`fixed xl:static bg-white w-[80%] md:w-[40%] xl:w-full h-full ${
          showMenu ? "left-0 " : "-left-full"
        } top-0  flex flex-1 flex-col xl:flex-row justify-center items-center gap-10 transition-all duration-500 cursor-pointer`}
        style={{ fontFamily: "Gloock, serif" }}
      >
        <a
          href="#"
          className="hover:bg-slate-200 p-2 rounded-lg transition-all ease-in-out duration-700"
        >
          About Us
        </a>
        <a
          href="#"
          className="hover:bg-slate-200 p-2 rounded-lg transition-all ease-in-out duration-700"
        >
          Contact
        </a>
        {/* <a
          onClick={handleSignUpModal}
          href="#"
          className="hover:bg-slate-200 p-2 rounded-lg transition-all ease-in-out duration-700"
        >
          Sign Up
        </a> */}
        <a
          onClick={() => setLoginModal(!loginModal)}
          href="#"
          className="hover:bg-slate-200 p-2 rounded-lg transition-all ease-in-out duration-700"
        >
          Log In
        </a>
      </nav>

      <button className="xl:hidden" onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Gloock&display=swap');
      </style>
    </header>
  );
}
