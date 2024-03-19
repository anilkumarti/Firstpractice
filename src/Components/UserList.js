import React from "react";
import './UserList.css';
const UserList = (props) => {
  return (
    <ul className="user-list">
      {props.Details &&
        props.Details.map((item) => {
          return <li key={item.id}> Student {`${item.Name} (${item.Age})`}</li>;
         
        })}
    </ul>
  );
};
export default UserList;
