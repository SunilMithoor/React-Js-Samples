import { useState, useEffect } from "react";
import { fetchPaginationData } from "../services/apiServices/appService";

// Ensure this function supports pagination

const useFetchPaginationData = (initialPage = 1, initialLimit = 10) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(initialPage);
  const [limit, setLimit] = useState(initialLimit);
  const [hasMore, setHasMore] = useState(true); // To track if there is more data to fetch

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const posts = await fetchPaginationData(page, limit);
        setData((prevData) => [...prevData, ...posts]); // Append new data
        if (posts.length < limit) {
          setHasMore(false); // No more data to fetch
        }
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [page, limit]);

  // Expose data, loading state, error, and pagination handlers
  return {
    data,
    isLoading,
    error,
    hasMore,
    setPage,
    setLimit,
  };
};

export default useFetchPaginationData;
