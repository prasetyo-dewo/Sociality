import Image from "next/image";
import { Post } from "@/types/post";

export default function FeedCard({ post }: { post: Post }) {
  return (
    <div className="bg-[#0f0f0f] rounded-xl border border-[#222] w-150 h-214.5">
      <div className="flex items-center gap-3 p-4">
        <Image
          src={post.author.avatarUrl || "/avatar.png"}
          alt={post.author.username}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <p className="font-semibold">{post.author.username}</p>
          <p className="text-xs text-gray-400">{post.createdAt}</p>
        </div>
      </div>

      <Image
        src={post.imageUrl}
        alt={post.caption || ""}
        width={400}
        height={400}
        className="w-full object-cover"
      />

      <div className="p-4">
        <div className="flex gap-4 mt-3 text-gray-400 text-sm">
          <Image
            src="/icons/heart.svg"
            alt="Like"
            width={24}
            height={24}
          />
          {post.likeCount}
          <Image
            src="/icons/Comment Icon.svg"
            alt="Comment"
            width={24}
            height={24}
          />
          {post.commentCount}
          <Image
            src="/icons/Share Icon.svg"
            alt="Share"
            width={24}
            height={24}
          />
          <Image
            src="/icons/Archive.svg"
            alt="Archive"
            width={24}
            height={24}
          />
        </div>
        <p className="font-semibold">{post.author.username}</p>
        <p className="text-sm">{post.caption}</p>
      </div>
    </div>
  );
}
