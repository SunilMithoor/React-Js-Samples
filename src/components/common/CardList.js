// CardList.js
import React, { useEffect, useState } from "react";
import "./cardList.css";
import { fetchPosts } from "../../services/api"; // Import API logic

const CardList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data using useEffect
  useEffect(() => {
    const getPosts = async () => {
      const { data, error } = await fetchPosts(); // Call API logic
      if (data) {
        setPosts(data);
      } else {
        setError(error);
      }
      setLoading(false);
    };

    getPosts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data: {error.message}</div>;

  return (
    <div className="card-list">
      {posts.map((post) => (
        <div key={post.id} className="card">
          <h2 className="card-title">{post.title}</h2>
          <p className="card-body">{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default CardList;
