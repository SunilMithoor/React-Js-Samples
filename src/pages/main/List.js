import React from "react";
import { useNavigate } from "react-router-dom";

function List() {
  const items = [
    // {
    //   component: "Pagination",
    //   path: "/pagination",
    //   componentPath: "pagination/Pagination",
    //   name: "Pagination",
    // },
    { name: "Get Pagination Posts", path: "/getPaginationPosts" },
    { name: "Get Posts", path: "/getPosts" },
    { name: "Users List", path: "/userLists" },
    { name: "Get Photos", path: "/getPhotos" },
  ]; // List with corresponding paths
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => handleClick(item.path)}
            style={{ cursor: "pointer", color: "black" }}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
