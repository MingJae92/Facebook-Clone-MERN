import React, { useEffect, useState } from 'react';
import "./Feed.css";
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import axios from './axios';
import Pusher from 'pusher-js'

const pusher = new Pusher('a3372ba0676d1970b6e8', {
  cluster: 'eu' 

});

const Feed=()=> {

  const [postsData, setPostsData] = useState([]);

  const syncFeed = ()=>{
    axios.get('/api/retrieve/posts').then((res)=>{
     
      setPostsData(res.data)
    })
  }

  useEffect(()=>{
    const channel = pusher.subscribe('posts');
    channel.bind('inserted', function(data) {
      syncFeed()
    });
  },[])

  useEffect(()=>{
    syncFeed()
  },[])

  return (
    <div className="feed">
      <StoryReel/>
      <MessageSender/>
      
      {postsData.map(post=> (
        
        <Post
        
        profilePic = {post.profilePic}
        key={post.profilePic}
        text={post.text}
        timestamp = {post.timestamp}
        key={post.timestamp}
        username = {post.username}
        key={post.username}
        image={post.image}
        key={post.image}
        />
      ))
        }
    </div>
  ) 
}

export default Feed;
 