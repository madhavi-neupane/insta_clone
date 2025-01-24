import React from 'react'
import Feed from './Feed'
import './FeedLayout.css'
import SuggestionList from './SuggestionList'

const FeedLayout = () => {
  return (
    <div className="feed-container">
      <div className="middle-section">
        {/* post and stories */}
        <div className="post-section">
          {/* feed page has both stories and post */}
          <Feed />
        </div>
      </div>

      <div className="end-section">
        {/* follow / suggestion */}
        <div className="follow-section">
          <SuggestionList />
        </div>
      </div>
    </div>
  )
}

export default FeedLayout
