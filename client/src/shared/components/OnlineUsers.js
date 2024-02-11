import React from "react";
import "../UI/css/onlineUsers.css";

const OnlineUsers = () => {
  // Example user data
  const onlineUsers = [
    { id: 1, name: "John Doe", photo: "url_to_johns_photo" },
    { id: 2, name: "Jane Doe", photo: "url_to_janes_photo" },
    // Add more users as needed
  ];

  return (
    <div className="online-users-container">
      <h2>Online Users</h2>
      <ul className="user-list">
        {onlineUsers.map((user) => (
          <li key={user.id} className="user-item">
            <span class="material-symbols-outlined">person</span>
            <span className="user-name">{user.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OnlineUsers;
