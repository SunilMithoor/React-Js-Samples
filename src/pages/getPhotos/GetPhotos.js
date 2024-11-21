import React from "react";
import useFetchPhotos from "../../hooks/useFetchPhotos";
import GetPhotosCard from "./GetPhotosCard";
import BouncingDotsLoader from "../../components/loaders/bouncingDotLoader/BouncingDotsLoader";

const GetPhotos = () => {
  const { data: photos, isLoading, error } = useFetchPhotos();

  return (
    <div className="get-photos">
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
      {!isLoading && !error && <GetPhotosCard photos={photos} />}
    </div>
  );
};

export default GetPhotos;
