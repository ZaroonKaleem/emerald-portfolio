// export const Header = () => {
//   return <div className="flex justify-center items-center fixed top-3 w-full z-10">
//     <nav className="flex gap-1 p-0.5 border-white/15 rounded-full bg-white/10 backdrop-blur">
//       <a href="#" className="nav-item">Home</a>
//       <a href="#" className="nav-item">Projects</a>
//       <a href="#" className="nav-item">About</a>
//       <a href="#" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Contact</a>
//     </nav>
//   </div>;
// };

"use client";

import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Sterniz from "@/assets/images/Sterniz-bg.png";
import Link from "next/link";

export const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isFacilityOpen, setIsFacilityOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-3 w-full px-6 z-20">
      <div className="flex justify-between items-center bg-white/10 backdrop-blur border border-white/15 rounded-full p-3">
        {/* Logo */}
        <div className="text-white text-xl font-bold">
          <a href="/">
            <Image
              src={Sterniz}
              alt="Logo"
              className="h-auto w-[150px] sm:w-[180px] md:w-[200px]"
            />
          </a>
        </div>

        {/* Desktop Navigation */}

        <nav className="hidden lg:flex gap-6">
          {/* Services Dropdown */}
          <div className="relative">
            <button
              className="nav-item"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              Services ▾
            </button>
            {isServicesOpen && (
              <div
                className="absolute left-0 mt-2 w-48 bg-white text-white bg-white/10 backdrop-blur border border-white/15 rounded-lg p-2"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                {/* <a href="#" className="block px-4 py-2 hover:text-black hover:bg-gray-100 ">Software Solutions</a> */}
                <Link
                  href="/software-services"
                  className="block px-4 py-2 hover:bg-gray-200 hover:text-black"
                >
                  Software Solutions
                </Link>
                {/* Facility Management Sub-dropdown */}
                <div className="relative">
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 hover:text-black"
                    onMouseEnter={() => setIsFacilityOpen(true)}
                    onMouseLeave={() => setIsFacilityOpen(false)}
                  >
                    Facility Management ▸
                  </button>
                  {isFacilityOpen && (
                    <div
                      className="absolute left-full top-0 w-48 bg-white text-black rounded-lg shadow-lg text-white bg-white/10 backdrop-blur border border-white/15 rounded-lg"
                      onMouseEnter={() => setIsFacilityOpen(true)}
                      onMouseLeave={() => setIsFacilityOpen(false)}
                    >
                      {/* <a href="#" className="block px-4 py-2 hover:bg-gray-200 hover:text-black">Cleaning Services</a> */}
                      {/* <a href="#" className="block px-4 py-2 hover:bg-gray-200 hover:text-black">Security Services</a> */}
                      <Link
                        href="/cleaning-services"
                        className="block px-4 py-2 hover:bg-gray-200 hover:text-black"
                      >
                        Cleaning Services
                      </Link>
                      <Link
                        href="/security-services"
                        className="block px-4 py-2 hover:bg-gray-200 hover:text-black"
                      >
                        Security Services
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          <a href="#about" className="nav-item">
            About
          </a>
          <a href="#contact" className="nav-item">
            Contact
          </a>
          <a href="#" className="nav-item">
            Jobs
          </a>
          <a href="#" className="nav-item">
            Academy
          </a>
          <a href="#" className="nav-item">
            Career
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white/10 backdrop-blur border border-white/15 rounded-lg p-4">
          <a href="#about" className="block py-2 text-white">
            About
          </a>
          <a href="#" className="block py-2 text-white">
            Contact
          </a>
          <a href="#" className="block py-2 text-white">
            Career
          </a>
          <a href="#" className="block py-2 text-white">
            Jobs
          </a>
          <a href="#" className="block py-2 text-white">
            Academy
          </a>

          {/* Services Dropdown for Mobile */}
          <div className="py-2">
            <button
              className="w-full text-left text-white"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              Services ▾
            </button>
            {isServicesOpen && (
              <div className="pl-4">
                <Link
                  href="/software-services"
                  className="block py-2 text-white"
                >
                  Software Solutions
                </Link>
                {/* <a href="#" className="block py-2 text-white">Software Solutions</a> */}
                <button
                  className="w-full text-left text-white"
                  onClick={() => setIsFacilityOpen(!isFacilityOpen)}
                >
                  Facility Management ▾
                </button>
                {isFacilityOpen && (
                  <div className="pl-4">
                    <Link
                      href="/cleaning-services"
                      className="block py-2 text-white"
                    >
                      Cleaning Services
                    </Link>
                    <Link
                      href="/security-services"
                      className="block py-2 text-white"
                    >
                      Security Services
                    </Link>
                    {/* <a href="#" className="block py-2 text-white">Cleaning Services</a>
                    <a href="#" className="block py-2 text-white">Security Services</a> */}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
