import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch(`https://worker-typescript-template.londonpark.workers.dev/api/posts`);
      const postsResponse = await response.json();
      setPosts(postsResponse);

      /// const myStorage = window.sessionStorage;
      localStorage.setItem('test', 'londonGunPark');
      console.log('localStorage', localStorage.getItem('test'));
    };

    getPosts();
  }, []);

  return (
    <div>
      <h1>The List of Posts</h1>
      {posts.map(post => (
        <div key={post.id}>
          <h2>
            <Link to={`/posts/${post.id}`} style={{ textDecoration: 'none', color: 'black' }}>{post.title}</Link>
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Posts;