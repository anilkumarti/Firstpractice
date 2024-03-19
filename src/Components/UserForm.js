import React, { useState } from "react";
import "./UserForm.css";
const UserForm = ({ onDataHandler }) => {
  const [currName, setName] = useState("");
  const [currAge, setAge] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };
  const onSubmitHandler = (e) => {

    e.preventDefault();
    const obj = { Name: currName, Age: currAge };
    if(obj.Name==="" || obj.Age==="")
    { alert("Empty value cannot be submit")

    } else if(obj.Age<0)
    {  alert("Age>=0")
      
    }
     else {
      onDataHandler(obj);
    }
   
    
    setName("");
    setAge("");
  };

  return (
    <div className="form-details">
      <form onSubmit={onSubmitHandler}>
        <label> Enter Name</label>
        <input type="text" onChange={handleNameChange} />
        <label> Age</label>
        <input type="Number" onChange={handleAgeChange} />
        <button>Add Details</button>
      </form>
    </div>
  );
};

export default UserForm;
