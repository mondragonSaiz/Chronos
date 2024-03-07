import React from "react";
import profilePic from "../assets/images/profile_pic.png";
import taskPic from "../assets/images/taskHistory.png";
import taskAnalytics from "../assets/images/analytics.png";
import progress from "../assets/images/progressPic.png";
export default function Profile() {
  return (
    <section className=" h-[90vh] grid grid-cols-1 md:grid-cols-9">
      <div className=" md:col-span-9 flex items-center justify-center p-12">
        <div className="flex flex-col items-center">
          <img
            src={profilePic}
            className="w-[20vh] h-[20vh] rounded-[26px] mb-4"
          />
          <h1 className="text-xl font-bold">David Mondragon Saiz</h1>
        </div>
      </div>
      <div className=" md:col-span-3 flex items-center justify-center p-12 ">
        {" "}
        <div className="flex flex-col items-center cursor-pointer p-8 hover:shadow-md transition duration-300 bg-[#F49D5D] hover:bg-orange-300 rounded-lg border-4 border-indigo-500">
          <img src={taskPic} className="w-[20vh] h-[20vh]  mb-4 " />
          <h1 className="text-lg font-bold text-white">Task History</h1>
        </div>
      </div>
      <div className=" md:col-span-3 flex items-center justify-center p-12">
        <div className="flex flex-col items-center cursor-pointer p-8 h hover:shadow-md transition duration-300 bg-[#F49D5D] hover:bg-orange-300 rounded-lg border-4 border-indigo-500">
          <img src={progress} className="w-[20vh] h-[20vh]  mb-4 " />
          <h1 className="text-lg font-bold text-white">Projetcs</h1>
        </div>
      </div>
      <div className=" md:col-span-3 flex items-center justify-center p-12">
        <div className="flex flex-col items-center cursor-pointer p-8 h hover:shadow-md transition duration-300 bg-[#F49D5D] hover:bg-orange-300 rounded-lg border-4 border-indigo-500">
          <img src={taskAnalytics} className="w-[20vh] h-[20vh]  mb-4 " />
          <h1 className="text-lg font-bold text-white">Task Analytics</h1>
        </div>
      </div>
    </section>
  );
}
