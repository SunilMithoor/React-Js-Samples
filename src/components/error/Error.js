import React from "react";
import "../../components/error/Error.css";

const ErrorUI = ({ errorCode, errorMessage }) => {
  // Map error codes to specific messages and images
  const errorConfig = {
    404: {
      image: "https://via.placeholder.com/150/FF0000/FFFFFF?text=404",
      message: "Resource Not Found!",
    },
    500: {
      image: "https://via.placeholder.com/150/000000/FFFFFF?text=500",
      message: "Internal Server Error!",
    },
    403: {
      image: "https://via.placeholder.com/150/FFFF00/000000?text=403",
      message: "Access Denied!",
    },
    default: {
      image: "https://via.placeholder.com/150/CCCCCC/000000?text=Error",
      message: "An unexpected error occurred.",
    },
  };

  const { image, message } = errorConfig[errorCode] || errorConfig.default;

  return (
    <div className="error-container">
      <img src={image} alt="Error" className="image" />
      <h2 className="message">{errorMessage || message}</h2>
    </div>
  );
};

export default ErrorUI;
