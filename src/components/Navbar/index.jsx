import React from "react";

import { Link } from "react-router-dom";
import "../../index.css"
const Navbars = () => {
    return (
        <div>
            <ul class="flex">
  <li class="mr-6">
  <Link class="text-blue-500 hover:text-blue-800"  to="/">Notre Agence</Link>

  </li>
  <li class="mr-6">
  <Link class="text-blue-500 hover:text-blue-800"  to="/about">Notre Agence</Link>
  </li>
  <li class="mr-6">
  <Link class="text-blue-500 hover:text-blue-800" to="/philosophe"> voici nos philosophe</Link>
  </li>
  
</ul>
        
  </div>      
    )
    
}

export default Navbars;