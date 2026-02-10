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
        <div className="col-start-2 text-center">
          <input
            type="text"
            placeholder="Search"
            className="bg-[#181D27] text-white p-2 rounded-full w-full max-w-xs"
          />
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
