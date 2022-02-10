 import React   from 'react'
 import {Link} from "react-router-dom"
 

const users = [
  {
    name: `Platon`,
    
  },
  {
    name: `Solane`
  },
  {
    name: `Sedal`
  }
];
const Philosophe = () => {
  return (
  <div>
      {users.map((user, index) => (
        <h5 key={index}>
           <Link to={`/philosophe/${user.name}`}>{user.name}'s Page</Link> 

        </h5>
      ))}
    </div>  
  );
};


export default Philosophe