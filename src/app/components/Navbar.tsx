"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { IoIosBoat, IoIosMenu, IoIosClose } from "react-icons/io";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoWidth, setLogoWidth] = useState(300);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const menuRef = useRef<HTMLUListElement | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", window.location.pathname);
    }
  };

  useEffect(() => {
    window.history.replaceState(null, "", window.location.pathname);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 1024;
      setIsMobile(mobile);
      setLogoWidth(mobile ? 225 : 300);
      if (!mobile) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-10 bg-white shadow-lg">
      <nav className="container mx-auto flex justify-between items-center py-4 px-8">
        <div className="flex items-center absolute top-1 z-50">
          <Image
            src="https://res.cloudinary.com/dzdr7yyz4/image/upload/v1724999087/logo_g5xnj4.png"
            alt="SK Marine Logo"
            width={logoWidth}
            height={100}
            className="object-contain cursor-pointer"
            onClick={() => {
              setIsMenuOpen(false);
              scrollToSection("home");
            }}
          />
        </div>
        <div className="flex items-center lg:hidden ml-auto z-50">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? (
              <IoIosClose className="text-3xl text-black" />
            ) : (
              <IoIosMenu className="text-3xl text-black" />
            )}
          </button>
        </div>
        <ul
          ref={menuRef}
          className={`fixed inset-0 bg-white z-30 flex flex-col items-center justify-center lg:relative lg:flex-row lg:items-center lg:space-x-5 text-black font-medium text-2xl ml-auto transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } lg:translate-x-0 ${
            isMobile ? "w-full h-full" : ""
          } lg:w-auto lg:h-auto rounded-bl-md rounded-br-md lg:bg-transparent shadow-lg lg:shadow-none`}
        >
          <li>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                scrollToSection("home");
              }}
              className={`block px-4 py-2 transition-all duration-300 ${
                isMobile ? "text-4xl mt-2 mb-2" : ""
              } hover:text-blue-800`}
              aria-label="Home"
            >
              HOME
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                scrollToSection("service");
              }}
              className={`block px-4 py-2 transition-all duration-300 ${
                isMobile ? "text-4xl mt-2 mb-2" : ""
              } hover:text-blue-800`}
              aria-label="Services"
            >
              SERVICES
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                scrollToSection("about");
              }}
              className={`block px-4 py-2 transition-all duration-300 ${
                isMobile ? "text-4xl mt-2 mb-2" : ""
              } hover:text-blue-800`}
              aria-label="About"
            >
              ABOUT
            </button>
          </li>
          {isMobile ? (
            <>
              <li>
                <a href="#general-question">
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      scrollToSection("contact");
                    }}
                    className={`block px-4 py-2 transition-all duration-300 ${
                      isMobile ? "text-4xl mt-2 mb-2" : ""
                    } hover:text-blue-800`}
                    aria-label="General Question"
                  >
                    GENERAL QUESTION
                  </button>
                </a>
              </li>
              <li>
                <a href="#work-enquiry">
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      scrollToSection("contact-box");
                    }}
                    className={`block px-4 py-2 transition-all duration-300 ${
                      isMobile ? "text-4xl mt-2 mb-2" : ""
                    } hover:text-blue-800`}
                    aria-label="Work Enquiry"
                  >
                    WORK ENQUIRY
                  </button>
                </a>
              </li>
            </>
          ) : (
            <li className="relative group">
              <div
                aria-expanded="false"
                aria-controls="dropdown-menu"
                className="bg-blue-950 text-white px-4 py-2 rounded-lg transition-all duration-300 flex items-center justify-center cursor-pointer"
              >
                <span className="group-hover:opacity-0 transition-opacity duration-300">
                  NEED HELP?
                </span>
                <div className="w-8 h-8 flex justify-center items-center transform scale-0 group-hover:scale-100 transition-transform duration-300 absolute">
                  <IoIosBoat className="text-blue-100 text-3xl" />
                </div>
              </div>
              <ul
                id="dropdown-menu"
                className="absolute right-0 mt-1 w-56 bg-blue-950 text-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col items-center"
              >
                <li className="w-full">
                  <a href="#general-question" className="w-full">
                    <button
                      onClick={() => {
                        setIsMenuOpen(false);
                        scrollToSection("contact");
                      }}
                      className="w-full block hover:bg-blue-900 px-4 py-2 rounded-lg text-left"
                      aria-label="General Question"
                    >
                      GENERAL QUESTION
                    </button>
                  </a>
                </li>
                <li className="w-full">
                  <a href="#work-enquiry" className="w-full">
                    <button
                      onClick={() => {
                        setIsMenuOpen(false);
                        scrollToSection("contact");
                      }}
                      className="w-full block hover:bg-blue-900 px-4 py-2 rounded-lg text-left"
                      aria-label="Work Enquiry"
                    >
                      WORK ENQUIRY
                    </button>
                  </a>
                </li>
              </ul>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
