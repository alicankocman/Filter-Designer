import React, { useState, useEffect } from "react";
import "../component/search.css";

function PostList() {
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [showS1, setShowS1] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error("Error fetching users:", error));
  }, []);

  // Filter users based on search text
  const filteredUsers = users.filter(user =>
    user.id.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSearchInputChange = (event) => {
    setSearchText(event.target.value);
    setShowS1(event.target.value !== ""); // Set showS1 to true if input value is not empty
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Find Users" 
        className="search-text-1" 
        value={searchText} 
        onChange={handleSearchInputChange} 
      />
      <div>
        {filteredUsers.map((user, index) => (
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
