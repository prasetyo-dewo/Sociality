import FeedList from "@/components/feed/FeedList";

export default function Home() {
  return (
    <>
      <div className="fixed bg-black text-white w-full h-screen ">
        <main className="absolute top-18 left-0 right-0 bottom-0 overflow-y-auto flex justify-center">
          <div className="w-full max-w-105 py-6">
            <FeedList />
          </div>
        </main>
      </div>
    </>
  );
}
