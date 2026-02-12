"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import RegisterForm from "@/components/auth/RegisterForm";
import { Eye, EyeClosed } from "lucide-react";

const LoginForm = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div
        className="absolute bottom-[-40%] left-1/2 -translate-x-1/2
               w-screen h-full
               rounded-full blur-[300px] opacity-80"
        style={{
          background: "linear-gradient(180deg, #5613A3, #522BC8)",
        }}
      />
      <div className=" w-111.5 h-122.5 text-white border border-[#181D27] flex justify-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="justify-center items-center"
        >
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
              <span>Email</span>
              <input
                type="text"
                placeholder="Enter your email"
                className="border border-[#181D27] rounded-lg p-2 w-full"
              />
            </div>
            <div className="justify-center pt-5">
              <span>Password</span>
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  placeholder="Enter your password"
                  className="border border-[#181D27] rounded-lg p-2 w-full pr-10"
                />
              </div>
            </div>

            <div className="justify-center pt-5">
              <button
                type="submit"
                className="rounded-full bg-[#6936F2] w-99.5 h-12"
              >
                Login
              </button>
            </div>
            <div className="pt-4">
              <span>Don't have an account? </span>
              <Link
                href="/register"
                className="text-[#6936F2]"
              >
                Register
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
