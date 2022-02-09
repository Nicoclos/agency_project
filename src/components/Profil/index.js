import React   from 'react'


import {useParams} from 'react-router-dom'
const Profil =()=>{
  const users = [
    {
      name: `Platon`,
      text : "p"
    },
    {
      name: `Solane`
    },
    {
      name: `Sedal`
    }
  ];
  const params = useParams();
  console.log(params.name)
  console.log(users[0])
  

  return(

    <div>
     <p>j</p>
     
    </div>
    
  )
 
}

export default Profil
