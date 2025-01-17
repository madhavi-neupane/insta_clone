import React from 'react'
import Nav from './Nav'
import Stories from './Stories'
import Post from './Post'
import './FeedLayout.css'

const FeedLayout = () => {
  return (
    <div className="feed-container">
      {/* left side */}
      <div className="fixed-sidebar">
        <Nav />
      </div>

      {/* middle side */}
      <div className="feed-section">
        <Stories />
        <Post />
      </div>

      {/* right side */}
      <div className="follow-section">
        <h1>suggestions for you</h1>
        <ul>
          <li>user_1</li>
          <li>user_2</li>
          <li>user_3</li>
        </ul>
      </div>
    </div>
  )
}

export default FeedLayout
