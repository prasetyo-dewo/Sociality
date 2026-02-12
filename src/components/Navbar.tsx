import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full bg-black border border-[#181D27] text-white p-4">
      <div className="grid grid-cols-3 items-center">
        <div className="col-start-1">
          <Image
            src="/icons/Icon.svg"
            alt="Sociality Logo"
            width={137}
            height={36}
          />
        </div>
        <div className="col-start-2 flex justify-center">
          <div
            className="relative flex items-center 
               border border-white/40 rounded-full 
               bg-[#0F1623] w-full max-w-lg"
          >
            <Image
              src="/icons/search-lg.svg"
              alt="Search"
              width={18}
              height={18}
              className="absolute left-4 opacity-70"
            />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent text-white 
                 pl-12 pr-4 py-2 w-full 
                 outline-none"
            />
          </div>
        </div>

        <div className="col-start-3 text-right gap-3">
          <Link
            href="/login"
            className="mr-4"
          >
            <button className="bg-black border  border-[#181D27] hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full">
              Login
            </button>
          </Link>
          <Link
            href="/register"
            className="mr-4"
          >
            <button className="bg-[#6936F2] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Register
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
