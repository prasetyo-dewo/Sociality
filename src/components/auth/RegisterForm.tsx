"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Eye, EyeClosed } from "lucide-react";

const RegisterForm = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="h-screen">
      <div className=" w-130.75 h-196 text-white border border-[#181D27] flex justify-center">
        <form action="Login">
          <div className="pt-10 flex justify-center">
            <Image
              src="/icons/Icon.svg"
              alt="Login"
              width={137}
              height={36}
            />
          </div>
          <div className="pt-6 flex justify-center">
            <span className="items-center font-bold text-2xl">
              Welcome Back!
            </span>
          </div>
          <div className="pt-6 px-6 space-y-4">
            <div className="justify-center">
              <span>Name</span>
              <input
                type="text"
                placeholder="Enter your name"
                className="border border-[#181D27] rounded-lg p-2 w-full"
              />
            </div>
            <div className="justify-center">
              <span>Username</span>
              <input
                type="text"
                placeholder="Enter your username"
                className="border border-[#181D27] rounded-lg p-2 w-full"
              />
            </div>
            <div className="justify-center">
              <span>Number Phone</span>
              <input
                type="text"
                placeholder="Enter your number phone"
                className="border border-[#181D27] rounded-lg p-2 w-full"
              />
            </div>
            <div className="justify-center">
              <span>Password</span>
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  placeholder="Enter your password"
                  className="border border-[#181D27] rounded-lg p-2 w-full pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="absolute right-3 top-2.5"
                >
                  {show ? <EyeClosed size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            <div className="justify-center">
              <span>Confirm Password</span>
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  placeholder="Enter your confirm password"
                  className="border border-[#181D27] rounded-lg p-2 w-full pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="absolute right-3 top-2.5"
                >
                  {show ? <EyeClosed size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            <div className="justify-center pt-5">
              <button
                type="submit"
                className="rounded-full bg-[#6936F2] w-99.5 h-12"
              >
                Submit
              </button>
            </div>
            <div className="flex justify-centerpt-4">
              <span>Already have an account? </span>
              <a
                href="/login"
                className="text-[#6936F2]"
              >
                Log in
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
