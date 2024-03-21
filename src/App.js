import React, { useState } from "react";
import "./App.css";
import AddUsers from "./Components/Users/AddUsers";

import UserList from "./Components/Users/UserList";

function App() {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [...prevUserList, { name: uName, age: uAge,id:Math.random().toString()}];
    });
   console.log(userList) 
  };
  return (
    <div>
      <AddUsers onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
