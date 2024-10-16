import React, { useState, useEffect } from 'react'
import './Timeline.css'
import Suggestions from '../suggestion/Suggestions';
import Post from './Post'

function Timeline() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch('http://localhost:8080/post/all');
        const data = await res.json();
        console.log(data);
        setPosts(data);
      } catch (error) {
        console.log(error);  
      } finally {
        console.log('setting loading to false')
        setLoading(false);
      }
    }

    fetchPost();
  }, []);
  
  return (
    <div className="timeline">
    <div className="timeline__left">
    <div className="timeline__posts">


    {loading ? 'loading' : posts.map((post) => (
      <Post 
      user={post.userName} 
      postImage={post.imageUrl}
      likes={post.likes} 
      timestamp={post.createdAt}/>
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