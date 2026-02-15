/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeClosed } from "lucide-react";
import { loginUser } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const LoginForm = () => {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { setUser } = useAuth();

  const router = useRouter();

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await loginUser(form);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setUser(res.data.user);

      router.push("/");
    } catch (err: any) {
      setError(err.message || "Login gagal");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* glow background */}
      <div
        className="absolute bottom-[-40%] left-1/2 -translate-x-1/2
               w-screen h-full
               rounded-full blur-[300px] opacity-80"
        style={{
          background: "linear-gradient(180deg, #5613A3, #522BC8)",
        }}
      />

      <div className="relative w-111.5 h-122.5 text-white border border-[#181D27] rounded-xl flex justify-center bg-black">
        <form
          onSubmit={handleSubmit}
          className="w-full px-6"
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
            <span className="font-bold text-2xl">Welcome Back!</span>
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center pt-3">{error}</p>
          )}

          <div className="pt-6 space-y-4">
            <div>
              <span>Email</span>
              <input
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="border border-[#181D27] rounded-lg p-2 w-full bg-black"
              />
            </div>

            <div className="pt-2">
              <span>Password</span>
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="border border-[#181D27] rounded-lg p-2 w-full pr-10 bg-black"
                />

                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {show ? <EyeClosed size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="pt-5">
              <button
                type="submit"
                disabled={loading}
                className="rounded-full bg-[#6936F2] w-full h-12 disabled:opacity-50"
              >
                {loading ? "Loading..." : "Login"}
              </button>
            </div>

            <div className="pt-4 text-center">
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
function setUser(user: any) {
  throw new Error("Function not implemented.");
}
