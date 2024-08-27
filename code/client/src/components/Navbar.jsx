import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-gray-200 py-2.5 ">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <h1 className="font-bold text-3xl">EcoPower</h1>
        <div className="flex items-center lg:order-2">
          <button className="text-white bg-green-500 hover:bg-green-700 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 mx-4">
            Contact Us
          </button>
          <MdMenu className="inline-flex items-center rounded-lg lg:hidden"
            aria-controls="mobile-menu-2" onClick={toggleMenu} />
        </div>
        <div
          className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${
            isOpen ? "block" : "hidden"
          }`}
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li className="text-black rounded">Home</li>
            <Link to={"/dashboard"} className="text-black rounded">About Us</Link>
            <li className="text-black rounded">Community</li>
            <li className="text-black rounded">FAQs</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
