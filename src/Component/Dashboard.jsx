import React from "react";
import image from "../assets/Images/image.png";
import { Link } from "react-router-dom";
import Sidebar from "../Component/Sidebar";

import { FaBars, FaBell, FaUserCircle } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div>
      <nav className="bg-orange-800 px-6 py-1 flex justify-between items-center shadow-md ">
        <div className="flex items-center gap-3">
          <FaBars className="text-white text-xl cursor-pointer hover:text-gray-400 transition block lg:hidden" />

          <div className="flex items-center gap-3">
            <img
              src={image}
              alt="Logo"
              className="w-full max-w-[150px] h-auto sm:w-[300px] sm:h-[100px] object-contain"
            />
          </div>
        </div>
        {/*       
      <div className="hidden md:flex  bg-white  rounded px-2 py-2 ml-auto mr-5">
        <FaSearch className="text-gray-800 text-lg" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent text-gray-800 pl-2 outline-none w-64"
        />
      </div> */}

        <div className="flex items-center gap-5">
          <div className="relative">
            <FaBell className="text-white text-xl cursor-pointer hover:text-gray-400 transition" />
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
              3
            </span>
          </div>

          <div className="relative group">
            <button className="flex items-center text-white hover:text-gray-400 transition">
              <FaUserCircle className="text-2xl" />
            </button>

            <div className="absolute right-0 mt-2 w-36 bg-white text-gray-800 shadow-lg rounded-lg hidden group-hover:block transition-all">
              <ul className="p-2 text-sm">
                <li className="px-3 py-2 hover:bg-gray-200 rounded">
                  <Link to="/profile" className="block w-full">
                    Profile
                  </Link>
                </li>
                <li className="px-3 py-2 hover:bg-gray-200 rounded">
                  <Link to="/settings" className="block w-full">
                    Settings
                  </Link>
                </li>
                <li className="px-3 py-2 hover:bg-red-500 text-red-600 hover:text-white rounded">
                  <Link to="/logout" className="block w-full">
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Sidebar />
    </div>
  );
};

export default Dashboard;
