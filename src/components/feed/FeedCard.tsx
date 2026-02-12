import React from "react";
import FeedHeader from "./FeedHeader";
import FeedImage from "./FeedImage";
import FeedCaption from "./FeedCaption";
import FeedAction from "./FeedAction";
import FeedBottomCard from "./FeedBottomCard";

const FeedCard = () => {
  return (
    <div className="min-h-screen bg-black w-150 h-214.5 items-center">
      <FeedHeader />
      <FeedImage />
      <FeedAction />
      <FeedCaption />
      <FeedBottomCard />
    </div>
  );
};

export default FeedCard;
