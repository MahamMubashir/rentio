import logo from "../assets/header-logo.png";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <div className="bg-[#fff6ed] border-b border-gray-200 px-4 py-2 flex justify-between items-center h-[100px]">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 w-auto mr-2" />
        </div>

        {/* Navigation Links (Hidden on Mobile) */}
        <div className="hidden lg:flex space-x-6 text-gray-700">
          <button className="hover:text-orange-500">Prenájom</button>
          <button className="hover:text-orange-500">Predaj</button>
          <button className="hover:text-orange-500">Spravovať inzeráty</button>
          <button className="hover:text-orange-500">Zmluvy</button>
        </div>

        {/* Buttons Section (Hidden on Mobile) */}
        <div className="hidden lg:flex space-x-4">
          <button className="px-4 py-2 text-gray-700 border border-gray-400 rounded hover:bg-gray-100">
            Prihlásiť sa
          </button>
          <button className="px-4 py-2 bg-orange-400 text-white rounded hover:bg-orange-600">
            Zaregistrovať sa
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block lg:hidden text-black focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Mobile Menu (Sliding Sidebar) */}
        <div
          className={`fixed inset-0 bg-orange-200 bg-opacity-90 z-[999] transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } lg:hidden`}
        >
          <div className="p-6 flex flex-col space-y-4">
            {/* Close Button */}
            <button
              className="self-end text-black focus:outline-none"
              onClick={() => setIsOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Mobile Navigation Links */}
            <nav className="flex flex-col space-y-4 text-white">
              <button className="text-black text-lg hover:text-orange-400">
                Prenájom
              </button>
              <button className="text-black text-lg hover:text-orange-400">
                Predaj
              </button>
              <button className="text-black text-lg hover:text-orange-400">
                Spravovať inzeráty
              </button>
              <button className="text-black text-lg hover:text-orange-400">
                Zmluvy
              </button>
              <button className="text-black text-lg hover:text-orange-400">
                Prihlásiť sa
              </button>
              <button className=" text-black text-lg hover:text-orange-400">
                Zaregistrovať sa
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
