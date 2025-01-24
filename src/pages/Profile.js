import React from 'react'
import girl from '../assets/girl.png'

const Profile = () => {
  return (
    <div className="profile-content">
      <div className="profile-detail-section">
        <img src={girl} alt="profile" className="profile-image" />
        <div className="profile-detail">
          <h2>Maddy</h2>
          <p>Posts: 5 | Followers: 120 | Following: 80</p>
        </div>
      </div>

      <div className="profile-post-section"></div>
    </div>
  )
}

export default Profile
