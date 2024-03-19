import React, {useState} from 'react';
import './App.css'

import UserForm from './Components/UserForm';
import UserList from './Components/UserList';

function App() {
    const[currDetails, setDetails]=useState([{Name: "Anil",Age: 26,id:1}, {Name: "Billu",Age: 24,id:2}])
   
     const dataHandler=(obj)=> {
        setDetails(prev=> { 
            let id=Math.random().toString();
            obj={...obj,id}
            console.log(obj)
           return [...prev,obj]
        })
     } 
    
  return (
    
    <div>
       <UserForm onDataHandler={dataHandler}> </UserForm>
      <UserList Details={currDetails} ></UserList>
     
      
     
    </div>
  );
}

export default App;
