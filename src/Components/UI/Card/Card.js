import React from "react";
//import classes from './Card.module.css'
import classes from "../../Users/AddUsers.module.css";

const Card=(props)=> {
    
    return( 
        <div className={classes.input}>
            {props.children}
            
        </div>
    )
}
export default Card;