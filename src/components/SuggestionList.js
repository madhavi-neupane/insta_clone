import React from 'react'
import './suggestionList.css'
import nobi from '../assets/nobita.jpg'
import dora from '../assets/doraemon.png'
import girl from '../assets/girl.png'

const SuggestionList = () => {
  const suggestions = [
    { id: 1, username: 'john_doe', profilePic: nobi },
    { id: 2, username: 'robos', profilePic: dora },
    { id: 3, username: 'jelly', profilePic: girl },
  ]

  return (
    <div className="suggestion-content">
      <h4>Suggested for you</h4>
      <ul>
        {suggestions.map((user) => (
          <li key={user.id}>
            <img src={user.profilePic} alt={`${user.username}'s profile`} />
            <span>{user.username}</span>
            <button>Follow</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SuggestionList
