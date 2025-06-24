// src/Posts.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, clearPosts } from './features/posts/postSlice';

const Posts = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.posts);

  return (
    <div style={{ padding: 20 }}>
      <h2>Posts</h2>
      <button onClick={() => dispatch(fetchPosts())}>Fetch Posts</button>
      <button onClick={() => dispatch(clearPosts())}>Clear Posts</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <ul>
        {items.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
