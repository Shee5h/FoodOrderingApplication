import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import AdminBoard from './components/AdminBoard';
import Login from './components/Login';
import MainPage from './components/MainPage';
import Navbar from './components/Navbar';
import Registration from './components/Registration';
// import Test from './components/test'

function App() {
  return (
    <>

      <div><Navbar /></div>

      <div>
        <Routes>
          <Route path="/mainPage" element={<MainPage />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/adminBoard" element={<AdminBoard />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>

      {/* <div>
        <Routes>

        </Routes>
      </div> */}
    </>
  );
}

export default App;
