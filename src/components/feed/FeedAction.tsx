import React from "react";
import Image from "next/image";

const FeedAction = () => {
  return (
    <div>
      <div className="flex justify-around">
        <Image
          src="/icons/heart.svg"
          alt="Like"
          width={24}
          height={24}
        />
        <Image
          src="/icons/Comment Icon.svg"
          alt="Comment"
          width={24}
          height={24}
        />
        <Image
          src="/icons/Share Icon.svg"
          alt="Share"
          width={24}
          height={24}
        />
        <Image
          src="/icons/archive.svg"
          alt="Archive"
          width={24}
          height={24}
        />
      </div>
    </div>
  );
};

export default FeedAction;
