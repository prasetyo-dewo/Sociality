import React from "react";
import Image from "next/image";

const FeedHeader = () => {
  return (
    <div className="w-150 h-16 gap-3 flex">
      <div>
        <Image
          src="/images/Profile.png"
          alt="Back"
          width={64}
          height={64}
        />
      </div>
      <div className="flex">
        <span>Jhondoe</span>
        <span>1 menit</span>
      </div>
    </div>
  );
};
export default FeedHeader;
