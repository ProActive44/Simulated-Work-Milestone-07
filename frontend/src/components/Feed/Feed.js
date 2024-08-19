import React from 'react'
import FeedCard from "./FeedCard/FeedCard.js"

const Feed = ()=>{

  return(
    <div className="h-full">
        
        <div className="flex flex-col gap-10">
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
        </div>
    </div>
  )
}

export default Feed;