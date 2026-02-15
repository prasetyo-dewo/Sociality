import { Post } from "@/types/post";

export async function getPosts(): Promise<Post[]> {
  const res = await fetch(
    "https://social-media-be-400174736012.asia-southeast2.run.app/api/posts?page=1&limit=20",
    { cache: "no-store" },
  );

  const json = await res.json();

  return json.data.posts;
}
