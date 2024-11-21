import React, { useEffect, useCallback } from "react";
import useFetchPaginationData from "../../hooks/useFetchPaginationData";
import GetPaginationPostCard from "./GetPaginationPostCard";
import DotStream from "../../components/loaders/dotStream/DotStream";

const GetPaginationPosts = () => {
  const {
    data: posts,
    isLoading,
    error,
    hasMore,
    setPage,
  } = useFetchPaginationData(); // Access pagination-related states and functions

  // Use useCallback to memoize the handleScroll function
  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 1
    ) {
      if (hasMore && !isLoading) {
        setPage((prevPage) => prevPage + 1); // Fetch the next page
      }
    }
  }, [hasMore, isLoading, setPage]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
    };
  }, [handleScroll]); // Add handleScroll as a dependency

  return (
    <div className="get-posts">
      {/* Error UI */}
      {error && (
        <div className="error-container">
          <p>Error: {error.message}</p>
          <button onClick={() => window.location.reload()}>Retry</button>
        </div>
      )}

      {/* Posts Display */}
      {!error && <GetPaginationPostCard posts={posts} />}

      {/* Loading Indicator */}
      {isLoading && <DotStream />}

      {/* No More Posts Message */}
      {!hasMore && !isLoading && posts.length > 0 && (
        <p className="no-more-posts">No more posts available!</p>
      )}
    </div>
  );
};

export default GetPaginationPosts;
