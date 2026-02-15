"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close when click outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav className="w-full bg-black border border-[#181D27] text-white p-4">
      <div className="grid grid-cols-3 items-center">
        <div>
          <Image
            src="/icons/Icon.svg"
            alt="Sociality"
            width={137}
            height={36}
          />
        </div>

        <div className="flex justify-center">
          <div className="relative flex items-center border border-white/40 rounded-full bg-[#0F1623] w-full max-w-lg">
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
              className="bg-transparent text-white pl-12 pr-4 py-2 w-full outline-none"
            />
          </div>
        </div>

        <div
          className="flex justify-end items-center gap-3 relative"
          ref={ref}
        >
          {!user ? (
            <>
              <Link href="/login">
                <button className="border border-[#181D27] px-4 py-2 rounded-full">
                  Login
                </button>
              </Link>
              <Link href="/register">
                <button className="bg-[#6936F2] px-4 py-2 rounded-full">
                  Register
                </button>
              </Link>
            </>
          ) : (
            <>
              {/* Trigger */}
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 hover:bg-white/10 px-3 py-2 rounded-full"
              >
                <Image
                  src={user.avatarUrl || "/images/Profile.png"}
                  alt={user.username}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <span className="font-medium">{user.name}</span>
              </button>

              {/* Dropdown */}
              {open && (
                <div
                  className="
      absolute right-0 top-14 w-64
      z-[9999]
      rounded-2xl
      bg-[#0F1623]
      border border-[#1F2937]
      shadow-2xl
      backdrop-blur
    "
                >
                  <div className="p-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <Image
                        src={user.avatarUrl || "/images/Profile.png"}
                        alt={user.username}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-semibold">{user.name}</p>
                        <p className="text-sm text-white/60">
                          @{user.username}
                        </p>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/profile"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-white/10"
                  >
                    👤 <span>Profile</span>
                  </Link>

                  <button
                    onClick={() => {
                      logout();
                      setOpen(false);
                    }}
                    className="flex items-center gap-3 w-full px-4 py-3 text-red-500 hover:bg-red-500/10"
                  >
                    ➡️ <span>Logout</span>
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
