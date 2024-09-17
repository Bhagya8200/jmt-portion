import React, { useState } from "react";
import logo from "../assets/shaastra-logo.png";

function Footer() {
  const [charCount, setCharCount] = useState(0);
  const charLimit = 100;

  return (
    <div className="flex flex-col min-h-screen p-0 m-0">
      <footer className="bg-gray-900 text-white mt-auto w-full">
        <div className="sm:flex sm:justify-around sm:flex-row sm:items-center grid grid-rows-3 grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-4 p-4">
          <div className="row-start-1 row-end-2 col-start-1 col-end-2 sm:col-span-1 flex items-center justify-start p-2">
            <img className="w-24 sm:w-36" src={logo} alt="shaastra-logo" />
          </div>

          <div className="row-start-1 row-end-2 col-start-2 col-end-3 sm:col-span-1 flex items-center justify-start p-2">
            <ul className="text-md">
              <li className="text-xl sm:text-3xl font-semibold mb-2">
                Connect
              </li>
              <li className="hover:cursor-pointer hover:underline">
                <a
                  target="blank"
                  href="https://www.instagram.com/shaastra_iitm/"
                >
                  Instagram
                </a>
              </li>
              <li className="hover:cursor-pointer hover:underline">
                <a
                  target="blank"
                  href="https://x.com/ShaastraIITM?t=UBGVJJ3ceGhGFD2pBvMnTA&s=09"
                >
                  Twitter
                </a>
              </li>
              <li className="hover:cursor-pointer hover:underline">
                <a target="blank" href="https://www.facebook.com/Shaastra/">
                  Facebook
                </a>
              </li>
              <li className="hover:cursor-pointer hover:underline">
                <a target="blank" href="https://www.youtube.com/@iitmshaastra">
                  Youtube
                </a>
              </li>
            </ul>
          </div>

          <div className="row-start-2 row-end-3 col-span-2 sm:col-span-3 flex flex-col items-start p-2">
            <p className="text-2xl font-semibold">Leave a comment</p>
            <div className="flex flex-row items-end mb-3 w-full">
              <textarea
                placeholder="Type something here..."
                rows={4}
                cols={30}
                className="text-white bg-transparent border border-gray-300 rounded-md outline-none p-1 w-full"
                maxLength={charLimit}
                onChange={(e) => setCharCount(e.target.value.length)}
              />
              <div className="w-16 ml-2">
                {charCount}/{charLimit}
              </div>
            </div>
            <div className="flex justify-center items-center w-3/4">
              <button className="bg-slate-700 text-white w-[250px] p-3 sm:p-2 rounded-md text-base hover:cursor-pointer">
                Submit
              </button>
            </div>
          </div>

          <div className="row-start-3 row-end-4 col-span-2 sm:col-span-1 flex flex-col items-start p-2">
            <h1 className="text-2xl font-semibold mb-2">Developed By</h1>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-4 w-full">
              <li className="hover:underline">
                <a
                  target="blank"
                  href="https://www.linkedin.com/in/sishir-sivakumar"
                >
                  Sishir Sivakumar
                </a>
              </li>
              <li className="hover:underline">
                <a
                  target="blank"
                  href="https://www.linkedin.com/in/shivarammorigala"
                >
                  Shivaram
                </a>
              </li>
              <li className="hover:underline">
                <a
                  target="blank"
                  href="https://www.linkedin.com/in/bhagya-sree-neelapu-b4b010294?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B9LW9BaxcQeOHX14EcoU%2BPw%3D%3D"
                >
                  Bhagya Sree
                </a>
              </li>
              <li className="hover:underline">
                <a
                  target="blank"
                  href="https://www.linkedin.com/in/vijay-krishna-s-b68916283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                >
                  Vijay Krishna
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h1 className="text-center text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
            Junior Make-A-Thon
          </h1>
        </div>

        <div>
          <hr className="mx-9 my-2" />
          <div className="flex justify-center items-center">
            <p className="mb-2">
              @{new Date().getFullYear()} ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
