import React from 'react'
import './post.css'
import doraemonImage from '../assets/doraemon.png'
import nobitaImage from '../assets/nobita.jpg'
import girlImage from '../assets/girl.png'

const Post = ({ username, imageUrl, caption }) => {
  const images = {
    doraemon: doraemonImage,
    nobi: nobitaImage,
    girl: girlImage,
  }

  return (
    <div className="post">
      <h4>{username}</h4>
      <img src={images[imageUrl]} alt="img" />
      <p>{caption}</p>
    </div>
  )
}

export default Post
