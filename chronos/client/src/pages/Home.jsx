import React from "react";
import { Navigate } from "react-router";
//import Auth from "../utils/auth";
//import defaultpic from "../assets/images/default.png";
import { Flex, Text, Button, Checkbox, Select } from "@radix-ui/themes";
import { MdPets } from "react-icons/md";
import { useContext } from "react";
import { AppContext } from "../utils/AppContext";
import homeImage from "../assets/images/pro.png";
import LoginModal from "../components/LoginModal";
export default function Mainpage({ setLoginModal, loginModal }) {
  const ctxTheme = useContext(AppContext);
  const { appGlobalState, dispatch } = ctxTheme;
  // if (!Auth.loggedIn()) return <Navigate to="/" />;
  return (
    <section className=" h-[90vh] grid grid-cols-1 md:grid-cols-8">
      <div className=" md:col-span-5 flex items-center justify-center p-12">
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-[4rem] md:leading-[7.5rem]">
            Log, Track, Progress{" "}
            <span className="text-primary px-8  border-8 border-primary text-3xl md:text-7xl">
              Work Success
            </span>
          </h1>
          <p className="text-gray-500 text-xl leading-8">
            Chronos: Empowering Your Work Journey. Log your hours effortlessly,
            gain insights into your productivity, and unlock seamless
            collaboration.
          </p>
          <div className="flex items-center gap-4">
            <button className="bg-primary rounded-lg text-white px-8 py-2 border-3 hover:bg-secondary">
              Get Started
            </button>
            <button className="flex text-left py-2 px-8 items-center gap-4">
              {/* <RiPlayFill className="bg-red-200 p-4  box-content rounded-full hover:bg-red-400" /> */}
              <span className="text-gray-500">
                Watch our <br />
                introduction video
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center  md:col-span-3">
        <img src={homeImage} className="w-26 h-26 px-3 rounded-full" />
        <p className="text-gray-500 text-xl leading-8 mb-8">
          Your Journey to Productivity!
        </p>
      </div>
      {loginModal ? (
        <LoginModal
          isVisible={loginModal}
          onClose={() => setLoginModal(false)}
          //formState={formState}
          //setFormState={setFormState}
        />
      ) : (
        <></>
      )}

      {/* <SignUpModal
        isSignUpVisible={isSignUpVisible}
        onSignUpClose={onSignUpClose}
      /> */}
      {/* <div className="bg-yellow-300 md:col-span-8 h-[800px]">image</div> */}
    </section>
  );
}
