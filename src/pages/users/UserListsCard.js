import React from "react";
import "../../components/common/cardList.css";

const UserCardList = ({ users }) => {
  return (
    <div className="card-list">
      {users.map((user) => (
        <div key={user.id} className="card">
          <h2 className="card-title">{user.name}</h2>{" "}
          <p className="card-body">{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UserCardList;
