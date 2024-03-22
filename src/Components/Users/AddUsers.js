import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUsers.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUsers = (props) => {
  const [error, setError] = useState();
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const collegeInputRef = useRef();
  const addUserHandler = (e) => {
    e.preventDefault();

    const enteredUserName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    const enteredUserCollege = collegeInputRef.current.value;
    if (
      enteredUserAge.trim().length === 0 ||
      enteredUserName.trim().length === 0 ||
      enteredUserCollege.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Pls enter non empty value",
      });
      return;
    }
    if (enteredUserAge < 1) {
      setError({ title: "Invalid age", message: "Pls enter correct age" });
      return;
    }
    props.onAddUser(enteredUserName, enteredUserAge,enteredUserCollege);
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username"> User Name </label>
          <input type="text" id="username" ref={nameInputRef} />
          <label htmlFor="age"> Age </label>
          <input type="Number" id="age" ref={ageInputRef} />
          <label htmlFor="college">College</label>
          <input type="text" id="college" ref={collegeInputRef} />
            
          
          <Button type="submit">Add users </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUsers;
