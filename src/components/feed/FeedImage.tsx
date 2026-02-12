import React from "react";
import Image from "next/image";

const FeedImage = () => {
  return (
    <div>
      <Image
        src="/images/Image.png"
        alt="Feed Image"
        width={400}
        height={300}
      />
    </div>
  );
};

export default FeedImage;
