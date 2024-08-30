import Link from "next/link";
import Image from "next/image";
import { IoIosBoat } from "react-icons/io";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-10 bg-white shadow-lg">
      <nav className="container mx-auto flex justify-between items-center py-4 px-8">
        <div className="flex items-center absolute top-1">
          <Link href="#home" aria-label="Home">
            <Image
              src="https://res.cloudinary.com/dzdr7yyz4/image/upload/v1724999087/logo_g5xnj4.png"
              alt="SK Marine Logo"
              width={300}
              height={100}
              className="object-contain"
            />
          </Link>
        </div>
        <ul className="flex items-center space-x-11 text-black font-medium text-2xl ml-auto">
          <li>
            <Link
              href="#home"
              className="hover:text-blue-800 transition-all duration-300"
              aria-label="Home"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              href="#service"
              className="hover:text-blue-800 transition-all duration-300"
              aria-label="Services"
            >
              SERVICES
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="hover:text-blue-800 transition-all duration-300"
              aria-label="About"
            >
              ABOUT
            </Link>
          </li>
          <li className="relative group">
            <div
              aria-expanded="false"
              aria-controls="dropdown-menu"
              className="bg-blue-950 text-white px-4 py-2 rounded transition-all duration-300 flex items-center justify-center"
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
              className="absolute right-0 mt-1 w-56 bg-blue-950 text-white rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
            >
              <li></li>
              <li>
                <Link
                  href="#contact"
                  className="block hover:bg-gray-900 px-4 py-2 rounded"
                  aria-label="General Question"
                >
                  GENERAL QUESTION
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="block hover:bg-gray-900 px-4 py-2 rounded"
                  aria-label="Work Enquiry"
                >
                  WORK ENQUIRY
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
