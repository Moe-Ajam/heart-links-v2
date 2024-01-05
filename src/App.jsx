import './App.css';
import React from "react";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Main from "./components/Main";

function App() {


  return (
      <Router>
          <Routes>
              <Route exact path="/" element={<Main/>}/>
          </Routes>
      </Router>


  );
}

export default App;
