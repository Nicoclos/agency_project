
import {useParams} from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import philo from '../Data/philo';

const Profil =()=>{
  const { name } = useParams();
  const [currentPhilo, setCurrentPhilo] = useState(undefined)


  useEffect(() => {
    const foundPhilo = philo.find((title) => title.name === name);
    setCurrentPhilo(foundPhilo);
  }, [name])
if (!currentPhilo){
  return null
}
return (
    
  <div>
     <p> {currentPhilo.content}</p>
  </div>
);
}
export default Profil
