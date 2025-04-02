import React from "react";

import {
  FaChartLine,
  FaCog,
  FaDonate,
  FaRegEnvelope,
  FaUsers,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 bg-orange-800 h-screen  p-4">
      <div className="mb-4">
        <h1 className="text-2xl text-white font-bold">Admin Dashboard</h1>
      </div>
      <hr className="border-white mb-4" />
      <ul>
        <li className="p-2 hover:bg-orange-400 rounded">
          <a href="#" className="flex items-center gap-2 text-white">
            <FaDonate />
            <span>Donations</span>
          </a>
        </li>
        <li className="p-2 hover:bg-orange-400 rounded">
          <a href="#" className="flex items-center gap-2 text-white">
            <FaChartLine />
            <span>Campaigns</span>
          </a>
        </li>

        <li className="p-2 hover:bg-orange-400 rounded">
          <a href="#" className="flex items-center gap-2 text-white">
            <FaRegEnvelope />
            <span>Message</span>
          </a>
        </li>

        <li className="p-2 hover:bg-orange-400 rounded">
          <a href="#" className="flex items-center gap-2 text-white">
            <FaUsers />
            <span>Volunteers</span>
          </a>
        </li>

        <li className="p-2 hover:bg-orange-400 rounded">
          <a href="#" className="flex items-center gap-2 text-white">
            <FaCog />
            <span>Setting</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
