import React, {useEffect, useState } from "react";
import "./App.css";

import 'antd/dist/antd.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./components/Home"
import Navbar from "./components/Navbar/Navbar";



const App = ()=> {
  const [checked, setChecked] = useState(localStorage.getItem("theme") === "dark" ? true : false);

  /**
   * Everytime checked changes, update the property data-theme in the
   * HTML so it uses the theme we have in localStorage
   */
  useEffect(() => {
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
  }, [checked]);

  /**
   * Update the state of checked and the content of our theme object
   * in localStorage based on the checkbox toggle
   */
  const toggleThemeChange = () => {
    if (checked === false) {
      localStorage.setItem("theme", "dark");
      
      setChecked(true);
    } else {
      localStorage.setItem("theme", "light");

      setChecked(false);
    }
  }

  return (
    <div>
        
        <header className="App-header">
        <BrowserRouter>
          <Navbar />
          <Routes>
          <Route path="/" element={<Home />}  />

          </Routes>
        </BrowserRouter>
       
        <p>Click the switch to toggle themes</p>
        <label>
          <input
            type="checkbox"
            defaultChecked={checked}
            onChange={() => toggleThemeChange()}
          />
        </label>
      </header>
    </div>
  );
}

export default App;
