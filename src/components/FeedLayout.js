import React from 'react'
import Stories from './Stories'
import Feed from './Feed'
import './FeedLayout.css'

const FeedLayout = () => {
  return (
    <div className="feed-container">
      <div className="middle-section">
        {/* story */}
        <div className="story-section">
          <Stories />
        </div>

        {/* post */}
        <div className="post-section">
          <Feed />
        </div>
      </div>

      <div className="end-section">
        {/* follow / suggestion */}
        <div className="follow-section">
          <h1>Suggested for you</h1>
          {/* Dummy suggestions */}
          <ul>
            <li>user_1</li>
            <li>user_2</li>
            <li>user_3</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FeedLayout
