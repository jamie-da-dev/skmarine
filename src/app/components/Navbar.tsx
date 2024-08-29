import Link from "next/link";
import Image from "next/image";
import { IoIosBoat } from "react-icons/io";

const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-10 bg-transparent">
      <nav className="container mx-auto flex justify-between items-center py-4 px-8">
        <div className="flex items-center">
          <Link href="/" aria-label="Home">
            <Image
              src="/logo.png"
              alt="SK Marine Logo"
              width={200}
              height={100}
              className="object-contain"
            />
          </Link>
        </div>
        <ul className="flex items-center space-x-8 text-white font-medium relative">
          <li>
            <Link
              href="/"
              className="hover:text-gray-400 transition-all duration-300"
              aria-label="Home"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="hover:text-gray-400 transition-all duration-300"
              aria-label="Services"
            >
              SERVICES
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-gray-400 transition-all duration-300"
              aria-label="About"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-gray-400 transition-all duration-300"
              aria-label="Contact"
            >
              CONTACT
            </Link>
          </li>
          <li className="relative group">
            <div
              aria-expanded="false"
              aria-controls="dropdown-menu"
              className="bg-white text-black px-4 py-2 rounded transition-all duration-300 flex items-center justify-center"
            >
              <span className="group-hover:opacity-0 transition-opacity duration-300">
                NEED HELP?
              </span>
              <div className="w-8 h-8 flex justify-center items-center transform scale-0 group-hover:scale-100 transition-transform duration-300 absolute">
                <IoIosBoat className="text-blue-500 text-2xl" />
              </div>
            </div>
            <ul
              id="dropdown-menu"
              className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
            >
              <li>
                <Link
                  href="/booking"
                  className="block hover:bg-gray-200 px-4 py-2 rounded"
                  aria-label="Booking"
                >
                  BOOKING
                </Link>
              </li>
              <li>
                <Link
                  href="/work-enquiry"
                  className="block hover:bg-gray-200 px-4 py-2 rounded"
                  aria-label="Work Enquiry"
                >
                  WORK ENQUIRY
                </Link>
              </li>
              <li>
                <Link
                  href="/general-question"
                  className="block hover:bg-gray-200 px-4 py-2 rounded"
                  aria-label="General Question"
                >
                  GENERAL QUESTION
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
