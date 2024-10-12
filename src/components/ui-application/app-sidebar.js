"use client";
import { useState } from "react";

const AppSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <aside
      className={`${
        isSidebarOpen ? "w-64" : "w-16"
      } bg-gray-800 text-white transition-all duration-300`}
    >
      <div className="flex justify-between items-center p-4">
        <h2
          className={`${isSidebarOpen ? "block" : "hidden"} text-lg font-bold`}
        >
          MyApp
        </h2>
        <button onClick={toggleSidebar} className="focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <nav className="mt-10">
        <a
          href="#"
          className="flex items-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white"
        >
          <span className={`${isSidebarOpen ? "block" : "hidden"} ml-4`}>
            Dashboard
          </span>
        </a>
        <a
          href="#"
          className="flex items-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white"
        >
          <span className={`${isSidebarOpen ? "block" : "hidden"} ml-4`}>
            Projects
          </span>
        </a>
        <a
          href="#"
          className="flex items-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white"
        >
          <span className={`${isSidebarOpen ? "block" : "hidden"} ml-4`}>
            Settings
          </span>
        </a>
      </nav>
    </aside>
  );
};

export default AppSidebar;
