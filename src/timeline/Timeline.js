import React, { useState } from 'react'
import './Timeline.css'
import Suggestions from './Suggestions'
import Post from './Post'

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "QT",
      postImage: "https://t3.ftcdn.net/jpg/01/02/85/78/360_F_102857871_vJs4AnThry3AUb2Va5VMTfRUUKiVwsgh.jpg",
      likes: 1500,
      timestamp: "2d"
    },
    {
      user: "pAleman",
      postImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Cane_da_pastore_tedesco_adulto.jpg/640px-Cane_da_pastore_tedesco_adulto.jpg",
      likes: 142,
      timestamp: "1d"
    },
    {
      user: "granD",
      postImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Dogge_Odin.jpg/320px-Dogge_Odin.jpg",
      likes: 222,
      timestamp: "1h"
    },
    {
      user: "border",
      postImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Border_collie_canon.jpg/640px-Border_collie_canon.jpg",
      likes: 513,
      timestamp: "15m"
    }
  ]);
  console.log(posts)
  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post 
              user={post.user} 
              postImage={post.postImage}
              likes={post.likes} 
              timestamp={post.timestamp}/>
          ))}
        </div>
      </div>
      <div className="timeline__right">
          <Suggestions />

        </div>
    </div>
  )
}

export default Timeline