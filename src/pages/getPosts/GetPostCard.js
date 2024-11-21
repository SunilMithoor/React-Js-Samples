import React from "react";
import "../../components/common/cardList.css";

const GetPostCard = ({ posts }) => {
  return (
    <div className="card-list">
      {posts.map((post) => (
        <div key={post.id} className="card">
          <h2 className="card-title">{post.title}</h2>{" "}
          <p className="card-body">{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default GetPostCard;
