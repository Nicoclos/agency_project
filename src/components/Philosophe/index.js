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
// const Philosophe = ({ match, location }) => {
//   const {
//     params: { userId }
//   } = match;

//   return (
//     <div>
//       <p>
//         <strong>User ID: </strong>
//         {userId}
//       </p>
//       <p>
//         <strong>User Name: </strong>
//         {users[userId - 1].name}
//       </p>
  
//     </div>
//   );
// };

export default Philosophe