//users.jsx
import React, { useState, useEffect } from "react";
import "../component/search.css";

function PostList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error("Error fetching users:", error));
  }, []);

  return (
    <div>
      <div>
        {users.map((user, index) => (
          <div key={user.id}> 
            <img src={user.image_picture} alt={user.name} />
            {user.name}
            &nbsp;&nbsp;ID:{user.id}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostList;
