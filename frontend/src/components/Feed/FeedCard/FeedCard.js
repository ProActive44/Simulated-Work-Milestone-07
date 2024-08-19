import React from 'react'
import { FaHeart, FaRegComment , FaRegPaperPlane, FaRegBookmark, FaRegSmile   } from "react-icons/fa";


const Feedcard = ()=>{
  const feed = {
    id: 1,
    profileImg: "https://via.placeholder.com/150",
    username: "john_doe",
    time: "2h",
    postImg: "https://via.placeholder.com/600",
    likeCount: 150,
    mutualFrndImg1: "https://via.placeholder.com/50",
    mutualFrndImg2: "https://via.placeholder.com/50",
    commentCount: 20,
    caption: "Enjoying the sunset!"
  };

  return(
    <>
      <div className="">

        {/* Post author section */}
        <div className="flex gap-2 items-center font-semibold my-1">
          <img src={feed.profileImg} alt={feed.username} className="rounded-full h-[40px]"/>
          <p>{feed.username}</p>
          <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
          <p>{feed.time}</p>
        </div>

        {/* image section */}
        <div>
          <img src={feed.postImg} alt={feed.caption}/>
        </div>

        {/* Likes, comments, share section */}
        <div className="flex justify-between my-1">
          <div className="flex gap-3">
              <FaHeart/>
              <FaRegComment />
              <FaRegPaperPlane/>
          </div>
          <div>
              <FaRegBookmark/>
          </div>
        </div>

        {/* Likes count */}
        <div className="font-semibold">
          {`${feed.likeCount} likes`}
        </div>

        {/* Caption section */}
        <div className="flex gap-3">
          <div className="font-semibold">{feed.username}</div>
          <div>{feed.caption}</div>
        </div>

        {/* Comments count */}
        <div>
          {`View all ${feed.commentCount} comments` }
        </div>

        {/* Comment input section */}
        <div className="flex justify-between my-2">
          <input type="text" className="border-none border-b-2 focus:outline-none" placeholder="Add a Comment"/>
          <FaRegSmile />
        </div>

      </div>
    </>
  )
}

export default Feedcard;