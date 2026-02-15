"use client";
import { useEffect, useState } from "react";
import { getPosts } from "@/lib/post";
import FeedCard from "./FeedCard";
import { Post } from "@/types/post";

export default function FeedList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts()
      .then((res) => {
        console.log("SET POSTS:", res);
        setPosts(res);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-white">Loading...</p>;
  if (!posts.length) return <p className="text-white">No posts</p>;

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <FeedCard
          key={post.id}
          post={post}
        />
      ))}
    </div>
  );
}
