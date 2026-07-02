import React from "react";
import { UserData } from "../assets/userData";

const UserDetails = () => {
  return (
    <div>
      {UserData.map((user) => (
        <div key={user.id}>
          <div>{user?.name}</div>
          <div>{user.email}</div>
          <div>{user.username}</div>
        </div>
      ))}
    </div>
  );
};

export default UserDetails;
