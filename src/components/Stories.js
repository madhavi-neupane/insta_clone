import React, { useState } from 'react'
import './stories.css'
import nobitaImage from '../assets/nobita.jpg'
import diceImage from '../assets/dice.jpg'
import elephantImage from '../assets/elephant.jpg'
import girlImage from '../assets/girl.png'

const Stories = () => {
  const [currentStory, setCurrentStory] = useState(null)
  const [timer, setTimer] = useState(null)

  const handleClick = (story) => {
    setCurrentStory(story)
    setTimer(5)
  }

  const storyData = [
    {
      id: 1,
      username: 'maddy',
      imageUrl: nobitaImage,
    },
    {
      id: 2,
      username: 'john',
      imageUrl: diceImage,
    },
    {
      id: 3,
      username: 'beanie',
      imageUrl: elephantImage,
    },
    {
      id: 4,
      username: 'meowtoon',
      imageUrl: girlImage,
    },
  ]

  return (
    <div className="stories">
      {storyData.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.imageUrl} alt={`${story.username}'s story`} />
          <p>{story.username}</p>
        </div>
      ))}
    </div>
  )
}

export default Stories
