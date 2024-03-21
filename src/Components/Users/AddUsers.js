import React, {useState} from "react";
 import Card from "../UI/Card/Card";
 import Button from "../UI/Button";
 import classes from "./AddUsers.module.css"
import ErrorModal from "../UI/ErrorModal";

const AddUsers = (props) => {
  const [enteredUserName,setEnteredUserName]=useState("")
  const [enteredUserAge,setEnteredUserAge]=useState("")
  const [error,setError]=useState();
  const addUserHandler = (e) => {
    e.preventDefault();
    if(enteredUserAge.trim().length===0 || enteredUserName.trim().length===0)
    { setError({title: "Invalid Input",message:"Pls enter non empty value"})
      return;
    }
    if(enteredUserAge<1)
    {  setError({title: "Invalid age",message:"Pls enter correct age"})
      return;
    }
    props.onAddUser(enteredUserAge,enteredUserName)
    setEnteredUserName("");
    setEnteredUserAge("");
  };

  const usernameChangeHandler=(e)=>{
      setEnteredUserName(e.target.value);
  }  
  const ageChangeHandler=(e)=>{
    setEnteredUserAge(e.target.value);
}
const errorHandler=()=> {
  setError(null)
}
  return ( 
    <div> 
    { error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
    <Card className={classes.input} >
      <form onSubmit={addUserHandler}>
        <label htmlFor="username"> User Name </label>
        <input type="text" id="username" value={enteredUserName} onChange={usernameChangeHandler} />
        <label htmlFor="age"> Age </label>
        <input type="Number" id="age" value={enteredUserAge} onChange={ageChangeHandler}/>
        <Button type="submit">Add users </Button>
      </form>
    </Card>
    </div>
  );
};

export default AddUsers;
