import './App.css';
import React from "react";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Main from "./views/Main";
import Login from "./views/Login";

function App() {


  return (
      <Router>
          <Routes>
              <Route exact path="/" element={<Login/>}/>
              <Route path="/home" element={<Main/>}/>
          </Routes>
      </Router>


  );
}

export default App;
