import React, { Profiler, useState } from 'react'
import './stories.css'

const Stories = ({ stories = [] }) => {
  const [currentStory, setCurrentStory] = useState(null)
  const [timer, setTimer] = useState(null)

  const handleClick = (story) => {
    setCurrentStory(story)
    setTimer(5)
  }

  const handleClosesStory = () => {
    setCurrentStory(null)
    clearTimeout(timer)
  }

  React.useEffect(() => {
    if (currentStory && timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000)
      return () => clearTimeout(countdown)
    } else if (timer == 0) {
      handleClosesStory()
    }
  }, [currentStory, timer])

  return (
    <div className="stories">
      {/* displayed stories */}
      {stories.map((story) => (
        <div
          className="story"
          key={story.id}
          onClick={() => handleClick(story)}
        >
          <img
            src={story.ProfilePicture}
            alt={`${story.username}'s profile`}
            className="profile-picture"
          />
          <p>{story.username}</p>
        </div>
      ))}

      {/* viewed stories */}
      {currentStory && (
        <div className="story-viewer" onClick={handleClosesStory}>
          <img
            src={currentStory.imageUrl}
            alt={`${currentStory.username}'s story`}
            className="story-image"
          />
        </div>
      )}
    </div>
  )
}

export default Stories
