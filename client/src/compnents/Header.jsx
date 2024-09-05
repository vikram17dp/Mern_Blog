import React, { useState } from "react";
import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import {useSelector} from  'react-redux'

const selectCurrentUser = (state) => state.currentuser;
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const currentuser  = useSelector(selectCurrentUser)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center text-sm sm:text-xl whitespace-nowrap font-semibold dark:text-white"
      >
        <span className="px-3 rounded-lg ml-4 py-1.5 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          {`Vikram's`}
        </span>
        Blog
      </Link>
      <form className="lg:ml-[10vw] lg:mb-[2vh] lg:mt-3">
        <TextInput
          type="text"
          placeholder="search..."
          className="hidden lg:inline w-full justify-between"
        />
      </form>
      <ul className="hidden lg:flex justify-evenly">
        <Link to="/">
          <li className="text-slate-700 mr-5 font-semibold hover:text-blue-400">
            Home
          </li>
        </Link>
        <Link to="/about">
          <li className="text-slate-700 mr-5 font-semibold hover:text-blue-400">
            About
          </li>
        </Link>
        <Link to="/projects">
          <li className="text-slate-700 font-semibold hover:text-blue-400">
            Projects
          </li>
        </Link>
      </ul>
      <div className="flex gap-2 md:order-2 lg:mr-6">
        <Button
          className="w-12 h-10 hidden sm:inline items-center rounded-[40%]"
          color="gray"
        >
          <FaMoon className="self-center" />
        </Button>
        {
          currentuser ? (
            <Dropdown 
            arrowIcon={false}
            inline
            className="h-4 w-6 bg-red-500"
            label={
              <Avatar 
                alt="user"
                img={currentuser.profilePicture}
                rounded
              />
            }
            >

            </Dropdown>
          ) : (
            <div className="">
          <Link to="/signin">
            <button className="px-4 py-2 rounded-lg border-2 border-pink-300 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Sign In
            </button>
          </Link>
        </div>
          )
        }

        <Button
          className="w-12 h-10 mt-2 border-none lg:hidden"
          color="gray"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <HiX className="self-center" />
          ) : (
            <HiMenu className="self-center" />
          )}
        </Button>
      </div>
      <div
        className={`lg:hidden ${
          isOpen ? "block" : "hidden"
        } absolute top-16 right-0 bg-white shadow-md rounded-lg p-4`}
      >
        <ul className="flex flex-col space-y-2">
          <Link to="/" onClick={toggleMenu}>
            <li className="text-slate-700 font-semibold hover:text-blue-400">
              Home
            </li>
          </Link>
          <Link to="/about" onClick={toggleMenu}>
            <li className="text-slate-700 font-semibold hover:text-blue-400">
              About
            </li>
          </Link>
          <Link to="/projects" onClick={toggleMenu}>
            <li className="text-slate-700 font-semibold hover:text-blue-400">
              Projects
            </li>
          </Link>
        </ul>
      </div>
    </Navbar>
  );
}

export default Header;
