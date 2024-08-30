import Link from "next/link";
import {
  IoIosBoat,
  IoIosMail,
  IoIosCall,
  IoLogoInstagram,
  IoIosClock,
} from "react-icons/io";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-950 text-white py-6 relative">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-xl">
        <div className="text-2xl flex items-center">SK MARINE NZ</div>
        <div className="flex items-center">
          Your Marine Experts for Every Voyage.
        </div>
      </div>
      <div className="container mx-auto flex flex-col items-center mt-6 border-t border-blue-900 pt-6">
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-16 text-sm">
          <div className="flex items-center space-x-2">
            <IoIosCall className="text-blue-700 text-3xl" />
            <a
              href="tel:+64212165501"
              className="hover:text-blue-600 transition-colors duration-300 text-lg"
            >
              +64 21 216 5501
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <IoIosMail className="text-blue-700 text-3xl" />
            <a
              href="mailto:skmarinenz@gmail.com"
              className="hover:text-blue-600 transition-colors duration-300 text-lg"
            >
              skmarinenz@gmail.com
            </a>
          </div>{" "}
          <div className="flex items-center space-x-2">
            <IoLogoInstagram className="text-blue-700 text-3xl" />
            <a
              href="https://www.instagram.com/sk_marine_nz/"
              className="hover:text-blue-600 transition-colors duration-300 text-lg"
            >
              SK MARINE NZ
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <IoIosClock className="text-blue-700 text-3xl " />
            <div className="text-base hover:text-blue-600 transition-colors duration-300">
              <p>Mon - Sat: 8:00AM - 6:00PM</p>
              <p>Sun: Closed</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center mt-8 text-base text-blue-800">
        © 2024 SK Marine. All rights reserved. | Developed by{" "}
        <a
          href="https://jamie-da-dev.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:underline"
        >
          Jamie Da Dev
        </a>
      </div>
    </footer>
  );
};

export default Footer;
