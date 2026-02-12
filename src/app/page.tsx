import Image from "next/image";
import Navbar from "@/components/Navbar";
import FeedCard from "@/components/feed/FeedCard";

export default function Home() {
  return (
    <>
      <div className="bg-black text-white w-full h-screen">
        <Navbar />
        <FeedCard />
      </div>
    </>
  );
}
