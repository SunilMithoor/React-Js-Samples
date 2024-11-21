import React from "react";
import useFetchPosts from "../../hooks/useFetchPosts";
import GetPostCard from "./GetPostCard";
import BouncingDotsLoader from "../../components/loaders/bouncingDotLoader/BouncingDotsLoader";

const GetPosts = () => {
  const { data: posts, isLoading, error } = useFetchPosts();

  return (
    <div className="get-posts">
      {/* Loading UI */}
      {isLoading && (
        <div className="loading-container">
          <BouncingDotsLoader />
        </div>
      )}

      {/* Error UI */}
      {!isLoading && error && (
        <div className="error-container">
          <p>Error: {error.message}</p>
          <button onClick={() => window.location.reload()}>Retry</button>
        </div>
      )}

      {/* Success UI */}
      {!isLoading && !error && <GetPostCard posts={posts} />}
    </div>
  );
};

export default GetPosts;
