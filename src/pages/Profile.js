import React from 'react'
import './profile.css'
import girl from '../assets/girl.png'
import elephant from '../assets/elephant.jpg'
import dog from '../assets/jumpingDog.jpg'
import dice from '../assets/dice.jpg'
import heart from '../svg/white-heart.svg'

const Profile = () => {
  return (
    <div className="profile-content">
      <div className="profile-detail-section">
        <img src={girl} alt="profile" className="profile-image" />
        <div className="profile-detail">
          <h2>Maddy</h2>
          <p>
            {' '}
            <span>4</span> Posts | <span>120</span> Followers | <span>80</span>{' '}
            Following
          </p>
          <p
            style={{
              color: 'grey',
              fontSize: '12px',
              fontWeight: '600',
            }}
          >
            Followed by <span> jolly, jelly </span> and others
          </p>
        </div>
      </div>

      <div className="profile-post-section">
        <h3>Maddy's Posts</h3>
        <div className="profile-post">
          <div className="single-post">
            <img src={girl} alt="post" />
            <div className="overlay">
              <img src={heart} alt="heart" className="emoji" />
              <p>345</p>
            </div>
          </div>

          <div className="single-post">
            <img src={elephant} alt="post" />
            <div className="overlay">
              <img src={heart} alt="heart" className="emoji" />
              <p>35</p>
            </div>
          </div>

          <div className="single-post">
            <img src={dog} alt="post" />
            <div className="overlay">
              <img src={heart} alt="heart" className="emoji" />
              <p>405</p>
            </div>
          </div>

          <div className="single-post">
            <img src={dice} alt="post" />
            <div className="overlay">
              <img src={heart} alt="heart" className="emoji" />
              <p>45</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
