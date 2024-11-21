import React from 'react';
import './SkeletonLoadingScreen.css';

const SkeletonLoadingScreen = () => {
  return (
    <div className="skeleton-container">
      <div className="skeleton-row">
        <div className="skeleton-item"></div>
        <div className="skeleton-item"></div>
      </div>
      <div className="skeleton-row">
        <div className="skeleton-item"></div>
        <div className="skeleton-item"></div>
      </div>
      <div className="skeleton-row">
        <div className="skeleton-item"></div>
        <div className="skeleton-item"></div>
      </div>
    </div>
  );
};

export default SkeletonLoadingScreen;