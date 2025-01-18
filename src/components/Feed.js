import React from 'react'
import './Feed.css'
import Post from './Post'
import nobitaImage from '../assets/nobita.jpg'
import diceImage from '../assets/dice.jpg'
import elephantImage from '../assets/elephant.jpg'
import girlImage from '../assets/girl.png'
import doraemonImage from '../assets/doraemon.png'
import Stories from './Stories'

const storyData = [
  {
    id: 1,
    username: 'maddy',
    ProfilePicture: nobitaImage,
    imageUrl: diceImage,
  },
  {
    id: 2,
    username: 'john',
    ProfilePicture: doraemonImage,
    imageUrl: elephantImage,
  },
  {
    id: 3,
    username: 'beanie',
    ProfilePicture: girlImage,
    imageUrl: girlImage,
  },
  {
    id: 4,
    username: 'meowtoon',
    ProfilePicture: elephantImage,
    imageUrl: diceImage,
  },
]

function Feed() {
  return (
    <div>
      <Stories stories={storyData} />
      <div className="feed">
        <Post username="maddy" imageUrl="nobi" caption="Great character!" />
        <Post
          username="john_doe"
          imageUrl="doraemon"
          caption="cat Robot or just robot?"
        />
      </div>
    </div>
  )
}

export default Feed
