import './App.css';
import React from "react";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Main from "./views/Main";
import Login from "./views/Login";
import PostViewer from "./views/PostViewer";
import UserProfile from "./views/UserProfile"

function App() {


  return (
      <Router>
          <Routes>
              <Route exact path="/login" element={<Login/>}/>
              <Route path="/home" element={<Main/>}/>
              <Route path="/post" element={<PostViewer/>}/>
              <Route path="/user-profile" element={<UserProfile/>}/>
          </Routes>
      </Router>


  );
}

export default App;
