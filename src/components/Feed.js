import React from 'react'
import './Feed.css'
import Post from './Post'

const Feed = () => {
  return (
    <div className="feed">
      <Post username="maddy" imageUrl="nobi" caption="Great character!" />
      <Post
        username="john_doe"
        imageUrl="doraemon"
        caption="cat Robot or just robot?"
      />
    </div>
  )
}

export default Feed
