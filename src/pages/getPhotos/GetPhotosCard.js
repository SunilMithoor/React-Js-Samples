import React from "react";
import "./GetPhotoCard.css";

const GetPhotoCard = ({ photos }) => {
  return (
    <div className="card-list">
      {photos.map((photo) => (
        <div key={photo.id} className="card">
          {/* Thumbnail */}
          {/* <img
            src={photo.thumbnailUrl}
            alt={`Thumbnail of ${photo.title}`}
            className="card-thumbnail"
          /> */}

          {/* Title */}
          <h2 className="card-title">{photo.title}</h2>

          {/* Main Image */}
          <img
            src={photo.url}
            alt={`Full view of ${photo.title}`}
            className="card-image"
          />

          {/* Body */}
          <p className="card-body">
            {photo.body || "No description available."}
          </p>
        </div>
      ))}
    </div>
  );
};

export default GetPhotoCard;
