import React, { useState } from "react";

import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./components/Home"

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

const App = ()=> {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
   
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>

          </Routes>
        </BrowserRouter>
          <GlobalStyles />
          <StyledApp>
            <button onClick={() => themeToggler()}>Change Theme</button>
          </StyledApp>
   </ThemeProvider> 
    
  );
}

export default App;
