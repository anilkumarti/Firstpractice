import React from "react";
import Card from "../UI/Card";
import classes from './UserList.module.css'
const UserList=(props)=> {
     console.log(props)
    return ( <Card className={classes.users}> 
        <ul>
    {
        
       props.users.map(item=> <li key={item.id}>{item.name} ({item.age} years old) collegeName: {item.college} </li>) 
    }
        </ul>
        </Card>
    ) 
}
export default UserList;