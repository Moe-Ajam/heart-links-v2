import './App.css';
import React from "react";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Main from "./views/Main";
import Login from "./views/Login";
import PostViewer from "./views/PostViewer";
import UserProfile from "./views/UserProfile"
import Registration from "./views/Registration";

function App() {


  return (
      <Router>
          <Routes>
              <Route exact path="/login" element={<Login/>}/>
              <Route path="/home" element={<Main/>}/>
              <Route path="/post" element={<PostViewer/>}/>
              <Route path="/user-profile" element={<UserProfile/>}/>
              <Route path="/registration" element={<Registration/>}/>
          </Routes>
      </Router>


  );
}

export default App;
