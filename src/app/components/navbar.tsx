import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className="bg-black sticky top-0 z-40 h-full w-full bg-main backdrop-blur-lg print:hidden ">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
          <div className="text-white font-bold text-3xl mb-4 lg:mb-0 cursor-pointer">
            Human Resources
          </div>

          {/* Hamburger icon for mobile */}
          <div className="lg:hidden">
            <button className="text-white focus:outline-none hover:text-yellow-100">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

       
          <div className="lg:flex lg:flex-row lg:space-x-4 lg:mt-0 mt-4 flex flex-col items-center text-xl">
            <a href="/" className="text-[#FFFFFF] px-4 py-2 hover:text-yellow-100">Home</a>
            <a href={"#About"} className="text-[#FFFFFF] px-4 py-2 hover:text-yellow-100">About</a>
            <a href={"#Services"} className="text-[#FFFFFF] px-4 py-2 hover:text-yellow-100"> Services  </a>
            <a href={"#Contact"} className="text-white px-4 py-2 hover:text-yellow-100">Contact Me</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
