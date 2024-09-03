import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble, BsLinkedin } from 'react-icons/bs';

export default function Footercomp() {
  return (
    <Footer container className="border border-t-8 border-teal-500 ">
      <div className="w-full max-w-7xl mx-auto">
        <div className="gris w-full justify-between sm:flex md:grid-cols-1 ">
          <div className="mt-4 ">
            <Link
              to="/"
              className="font-bold dark:text-white text-xl sm:text-2xl"
            >
              <span className="px-1 py-1 ml-8  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white ">
                {`Vikram's`}
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-6 sm:grid-cols-3 sm:gap-6 ml-10 mb-4 ">
            <div>
               
              <Footer.Title title="About" className="text-xl text-slate-500 mt-4" />
              <Footer.Link
                target="_blank"
                href="/about"
                className="text-black font-noraml focus:text-gray-700  list-none"
                rel="noopener noreferrer"
              >
                100 JS Projects
              </Footer.Link>
              <Footer.Link
                target="_blank"
                href="/about"
                rel="noopener noreferrer"
                className="text-black font-noraml focus:text-gray-700 list-none"
              >
                Vikram Blog
              </Footer.Link>
            </div>
            <div>
               
               <Footer.Title title="Follow us" className="text-xl text-slate-500 mt-4" />
               <Footer.Link
                 target="_blank"
                 href="/about"
                 className="text-black font-noraml focus:text-gray-700 no-underline list-none"
                 rel="noopener noreferrer"
               >
                 Github
               </Footer.Link>
               <Footer.Link
                 target="_blank"
                 href="/about"
                 rel="noopener noreferrer"
                 className="text-black font-noraml focus:text-gray-700 list-none"
               >
                 Discord
               </Footer.Link>
             </div>
             <div>
               
               <Footer.Title title="LEGAL" className="text-xl text-slate-500 mt-4" />
               <Footer.Link
                 target="_blank"
                 href="/about"
                 className="text-black font-noraml focus:text-gray-700 no-underline list-none"
                 rel="noopener noreferrer"
               >
                 Privacy Policy
               </Footer.Link>
               <Footer.Link
                 target="_blank"
                 href="/about"
                 rel="noopener noreferrer"
                 className="text-black font-noraml focus:text-gray-700 list-none mb-4"
               >
                 Terms & Conditions
               </Footer.Link>
             </div>
             
          </div>
        </div>
        <Footer.Divider/>
        <div className='w-full sm:flex sm:items-center sm:justify-between px-10 py-2 mt-4 mb-4'>
        <Footer.Copyright
            href='#'
            by="Vikram's Blog "
            year={new Date().getFullYear()}
            className="text-[14px]"
          />
        <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href='#' icon={BsFacebook} className="text-gray-400 text-2xl"/>
            <Footer.Icon href='https://www.instagram.com/mr_vikram_17/' icon={BsInstagram} className="text-gray-400 text-2xl"/>
            <Footer.Icon href='https://x.com/VikramDp2' icon={BsTwitter} className="text-gray-400 text-2xl"/>
            <Footer.Icon href='https://github.com/vikram17dp' icon={BsGithub} className="text-gray-400 text-2xl"/>
            <Footer.Icon href='https://www.linkedin.com/in/vikram-d-p-20053127b/' icon={BsLinkedin} className="text-gray-400 text-2xl"/>

          </div>
        </div>
      </div>
    </Footer>
  );
}
